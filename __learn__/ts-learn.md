# TypeScript 编译工具

## tsup

tsup 是一个基于 esbuild 的零配置 TypeScript 打包工具。

本项目使用的构建命令：
```bash
tsup src/index.ts --format cjs,esm --dts
```

| 参数 | 作用 |
|------|------|
| `--format cjs,esm` | 输出 CommonJS 和 ESModule 两种格式 |
| `--dts` | 生成 `.d.ts` 类型声明文件 |

**构建产物对应关系：**

| 构建命令 | 生成的文件 |
|---------|-----------|
| `--format cjs,esm` | `index.js` + `index.mjs` |
| `--dts` | `index.d.ts` |

### 特点

| 优点 | 缺点 |
|------|------|
| 快（基于 esbuild） | 不做类型检查 |
| 零配置 | 功能相对简单 |
| 支持 cjs/esm 双输出 | - |

### tsup 与 esbuild 的关系

tsup 是对 esbuild 的封装，在其基础上增加了额外功能。

```
tsup = esbuild + 额外功能
```

| esbuild 原有能力 | tsup 额外增加的 |
|-----------------|----------------|
| 极快的编译 | `--dts` 生成 .d.ts 类型声明 |
| 多格式输出 | 零配置 |
| - | 自动处理 entrypoint 依赖 |
| - | 生成 sourcemap |
| - | watch 模式 |

**tsup 内部原理：**

```typescript
// tsup 内部大概是这样工作的
function tsup(input) {
  // 1. 用 esbuild 编译 .ts → .js（快，不做类型检查）
  const js = esbuild.build(input);

  // 2. 用 tsc 生成 .d.ts（这就是 --dts）
  const dts = tsc.generateDeclarations(input);

  return { js, dts };
}
```

**总结**：
- 保留 esbuild 的快
- 加上 .d.ts 生成能力
- 简化配置

---

## 其他 TypeScript 编译工具

### tsc（TypeScript Compiler）

官方的 TypeScript 编译器。

```bash
tsc --strict
```

| 优点 | 缺点 |
|------|------|
| 类型检查最准确 | 编译速度慢 |
| 功能完整 | 配置复杂 |

### esbuild

极快的 JavaScript/TypeScript 打包工具，用 Go 编写。

| 优点 | 缺点 |
|------|------|
| 编译速度极快 | 不做类型检查 |
| 支持多种格式 | 不适合复杂项目 |

### swc

用 Rust 编写的 TypeScript 编译器，比 esbuild 稍慢但功能更全。

| 优点 | 缺点 |
|------|------|
| 快 | 生态不如 tsc |
| 支持类型检查 | - |

---

## 本项目的编译流程

```
.ts 文件
   ↓
  tsup（调用 esbuild 编译）
   ↓
 .js 文件（cjs + esm 两种格式）
 .d.ts 类型声明文件
```

## tsconfig.json 关键配置

```json
{
  "compilerOptions": {
    "target": "ES2020",        // 编译目标版本
    "module": "ESNext",        // 模块系统
    "strict": true,            // 严格类型检查
    "declaration": true,       // 生成 .d.ts
    "noEmit": true            // 不让 tsc 输出，由 tsup 接管
  }
}
```

### 配置说明

| 配置 | 作用 |
|------|------|
| `target` | 编译成的 JavaScript 版本 |
| `module` | 使用的模块系统 |
| `strict` | 开启所有严格检查 |
| `declaration` | 生成类型声明文件 |
| `noEmit` | 不输出文件，由 tsup 处理 |

### strict 严格模式包含

| 检查 | 说明 |
|------|------|
| strictNullChecks | null/undefined 必须处理 |
| strictPropertyInitialization | 类属性必须初始化 |
| noImplicitAny | 不能隐式 any |
| noImplicitReturns | 所有分支必须返回值 |

---

## .d.ts 是什么？

**.d.ts** 是 TypeScript 的**类型声明文件**（Declaration Files）。

```typescript
// 源代码 .ts
export type StorageType = 'localStorage' | 'dexie' | 'memory' | 'file';

// 生成的 .d.ts（类型声明）
export declare type StorageType = "localStorage" | "dexie" | "memory" | "file";
```

**作用**：
- 发布 npm 包时，不需要提供源代码，但使用者需要知道有哪些类型
- `declare` 表示"声明但不实现"

**由谁生成**：tsup 的 `--dts` 参数会自动生成。

---

## tsup 的实际工作流程

tsup 在构建时会分两步：

```
1. esbuild 转译 .ts → .js（快，不检查类型）
                ↓
2. 调用 tsc 生成 .d.ts（需要类型正确！）
                ↓
3. 如果类型错误 → 构建失败
```

| 步骤 | 工具 | 检查类型？ |
|------|------|-----------|
| .ts → .js | esbuild | ❌ 不检查 |
| 生成 .d.ts | tsc | ✅ 检查 |
| IDE 编辑时 | tsc | ✅ 检查 |

**关键点**：
- 构建 .js 时：tsup 不做类型检查（很快）
- 构建 .d.ts 时：tsup 会调用 tsc 做检查
- 这就是为什么去掉非空断言 `!` 会导致构建失败

---

## 构建产物

```
packages/core/
├── dist/
│   ├── index.js        # 编译后的 JS
│   ├── index.d.ts      # 类型声明文件
│   └── index.mjs      # ESM 格式
└── src/
    └── index.ts
```
