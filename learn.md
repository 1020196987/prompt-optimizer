# Prompt Optimizer 学习指南

## 项目概述

Prompt Optimizer 是一个 AI 提示词优化工具，帮助用户编写更好的提示词来提升 AI 输出质量。支持四种使用方式：Web 应用、桌面应用、Chrome 插件、Docker 部署。

### 同类产品对比

| 产品 | 开发者 | 技术栈 | 特点 |
|------|--------|--------|------|
| **Prompt Optimizer** | 开源社区 | Vue 3 + Naive UI | 开源、跨平台（Web/桌面/扩展/Docker） |
| **PromptPilot** | 字节跳动火山引擎 | React + Arco Design | 云端部署、企业级安全、微前端架构 |

#### PromptPilot 简介

**PromptPilot** 是字节跳动火山引擎推出的 AI 提示词工具，与 Prompt Optimizer 功能类似。

- **官网**：https://promptpilot.volcengine.com/
- **技术栈**：React 18.2.0 + Arco Design
- **架构**：微前端模块化设计
- **特点**：
  - 模块化设计，支持动态加载 AI Agent 模块
  - 云端部署，依托火山引擎全球化 CDN
  - 企业级安全，集成 CSRF Token 验证
  - 前后端分离，基于 fetch API 通信

#### 功能对比

| 功能 | Prompt Optimizer | PromptPilot |
|------|-----------------|-------------|
| 提示词优化 | ✅ | ✅ |
| 提示词测试 | ✅ | ✅ |
| 多模型支持 | ✅ | ✅ |
| 变量管理 | ✅ | ✅ |
| 模板管理 | ✅ | ✅ |
| 历史记录 | ✅ | ✅ |
| 收藏功能 | ✅ | ✅ |
| 评估功能 | ✅ | ❓ |
| 图像生成 | ✅ | ❓ |

#### 本项目优势

1. **开源免费**：完全开源，可自行部署
2. **跨平台**：支持 Web、桌面端、Chrome 扩展、Docker
3. **本地运行**：可离线使用，保护数据隐私
4. **技术栈**：Vue 3 + Naive UI，TypeScript 友好

---

## 核心价值

### 为什么需要 Prompt Optimizer？

很多人在使用 LLM（如 ChatGPT、Claude）时，都会遇到以下问题：

| 痛点 | 描述 |
|------|------|
| **重复劳动** | 每次都要手动复制粘贴优化提示词 |
| **无法对比** | 难以对比优化前后的效果差异 |
| **版本丢失** | 没有历史记录，不知道改了什么 |
| **测试困难** | 很难系统性地测试提示词效果 |
| **资产流失** | 好的提示词没有沉淀，下次要用又想不起来 |

---

### 核心价值对比

| 对比项 | 自己用 LLM 优化 | 使用 Prompt Optimizer |
|--------|----------------|---------------------|
| **重复劳动** | 每次手动复制粘贴 | 一键优化，自动保存 |
| **版本管理** | 没有记录 | 自动保存历史版本 |
| **对比效果** | 难以对比优化前后 | 实时对比优化效果 |
| **模板系统** | 需要自己设计 | 内置丰富模板 |
| **测试验证** | 很难测试提示词效果 | 可直接测试并评估 |
| **变量管理** | 手动替换 | 变量占位符，自动替换 |
| **多模型对比** | 手动切换 | 同时测试多个模型 |
| **团队共享** | 无法共享 | 收藏功能，模板共享 |

---

### 核心功能架构

```
┌─────────────────────────────────────────────────────┐
│                   Prompt Optimizer                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📝 输入原始提示词                                   │
│       │                                             │
│       ▼                                             │
│  🧠 AI 优化                                        │
│       ├── 系统提示词优化（System Prompt）            │
│       ├── 用户提示词优化（User Prompt）             │
│       └── 迭代优化（多轮改进）                       │
│                                                     │
│       ▼                                             │
│  📊 效果评估                                       │
│       ├── 自动评分                                   │
│       ├── 对比分析                                   │
│       └── 反馈改进                                   │
│                                                     │
│       ▼                                             │
│  🧪 测试验证                                        │
│       ├── 变量替换测试                              │
│       ├── 多轮对话测试                               │
│       └── 多模型对比                                 │
│                                                     │
│       ▼                                             │
│  💾 资产沉淀                                        │
│       ├── 历史记录                                   │
│       ├── 收藏夹                                    │
│       └── 模板管理                                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 适合人群

| 用户群体 | 价值说明 |
|---------|---------|
| **开发者** | 快速迭代提示词，测试不同模型效果，沉淀最佳实践 |
| **产品经理** | 设计 AI 提示词模板，团队共享复用 |
| **AI 爱好者** | 学习提示词工程，不用每次手动复制 |
| **企业用户** | 沉淀提示词资产，团队协作，提升效率 |
| **研究人员** | 系统性评估提示词效果，对比分析 |

---

### 举例说明

**场景**：你想让 AI 帮你写一篇产品评测文章。

**自己用 LLM 做的步骤**：
1. 打开 ChatGPT
2. 输入"帮我写一个产品评测，要专业、客观..."
3. 看结果，不满意
4. 手动修改提示词"要更详细一些，加入对比..."
5. 复制之前的结果到其他地方...
6. 下次想用，又要重新设计提示词...

**用 Prompt Optimizer 做的步骤**：
1. 输入原始需求
2. 一键 AI 优化
3. 查看优化建议和评分
4. 直接在工具内测试效果
5. 保存到收藏夹
6. 下次直接调用模板

---

### 简单比喻

| 比喻 | 解释 |
|------|------|
| **手工计算器 vs Excel** | 自己用 LLM 优化提示词就像用手工计算器算账，用 Prompt Optimizer 就像用 Excel 表格——更高效、更规范、可追溯 |
| **记事本 vs 笔记软件** | 好的提示词就像笔记，用记事本保存容易丢失，笔记软件可以分类、标签、搜索 |

---

### 总结

**Prompt Optimizer 解决的不是"AI 不能做某件事"的问题，而是：**

1. **效率问题** - 自动化、批量处理
2. **资产沉淀** - 历史记录、收藏模板
3. **质量保障** - 评估对比、测试验证
4. **团队协作** - 模板共享、版本管理

**它是一个专业的提示词工程工具**，帮助用户系统性地设计、优化、测试和管理 AI 提示词。

---

## 技术栈

| 领域 | 技术 |
|------|------|
| 前端框架 | Vue 3 + TypeScript (Composition API) |
| 构建工具 | Vite + pnpm workspaces |
| 样式 | TailwindCSS + PostCSS |
| 测试 | Vitest + Playwright |
| 桌面端 | Electron (带自动更新) |
| 国际化 | Vue-i18n |
| 状态管理 | 响应式 Composables (无 Pinia/Vuex) |
| UI 组件 | **Naive UI** (优先使用) |
| 构建工具 | **Vite** |

---

## Vite 启动流程解析

### 项目如何启动

在 `packages/web` 中执行 `pnpm run dev`，实际执行的是 `vite --force`。整个启动流程如下：

```
packages/web/package.json
    │
    ▼ scripts.dev = "vite --force"
    │
packages/web/vite.config.ts  ──→ 读取配置
    │
    ▼
packages/web/index.html  ──→ HTML 入口
    │
    ▼
packages/web/src/main.ts  ──→ Vue 应用入口
    │
    ▼
创建 Vue 实例并挂载到 #app
```

### 核心文件说明

#### 1. vite.config.ts 配置

```typescript
// packages/web/vite.config.ts
export default defineConfig(({ mode }) => {
  const monorepoRoot = resolve(__dirname, '../..')
  const env = loadEnv(mode, monorepoRoot)

  return {
    // 环境变量目录（指向 monorepo 根目录）
    envDir: monorepoRoot,

    // 插件配置
    plugins: [vue()],

    // 开发服务器配置
    server: {
      port: 18181,        // 端口号
      host: true,         // 监听所有网卡（0.0.0.0）
      hmr: true,          // 开启热更新
      watch: {
        // 监视 monorepo 中其他包的变化
        ignored: ['!**/node_modules/@prompt-optimizer/**']
      }
    },

    // 构建配置
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        }
      }
    },

    // 路径别名
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@prompt-optimizer/core': path.resolve(__dirname, '../core'),
        '@prompt-optimizer/ui': path.resolve(__dirname, '../ui'),
      }
    },

    // 预构建依赖
    optimizeDeps: {
      include: ['element-plus'],
    }
  }
})
```

#### 2. index.html 入口

```html
<!-- packages/web/index.html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <!-- 运行时配置，在应用代码之前加载 -->
    <script src="/config.js"></script>
    <title>提示词优化器</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- type="module" 告诉浏览器这是 ES 模块 -->
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

#### 3. main.ts Vue 应用入口

```typescript
// packages/web/src/main.ts
import { createApp } from 'vue'
import { installI18nOnly, installPinia, i18n, router } from '@prompt-optimizer/ui'
import '@prompt-optimizer/ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

// 安装插件
installI18nOnly(app)  // i18n
installPinia(app)     // 状态管理
app.use(router)       // 路由

// 挂载应用
app.mount('#app')
```

### Vite 核心概念

#### 1. 开发服务器 (dev server)

Vite 启动一个本地开发服务器，提供以下功能：

| 功能 | 说明 |
|------|------|
| **模块热更新 (HMR)** | 修改代码后无需刷新页面即可更新 |
| **ES 模块原生支持** | 浏览器直接支持 ES 模块导入 |
| **按需编译** | 只编译当前访问的页面，不用构建整个项目 |
| **Source Maps** | 调试时可以追踪到原始源码位置 |

#### 2. 入口文件 (index.html)

Vite **默认**会查找项目根目录的 `index.html`，但这是可以配置的。

**默认查找规则**：
- 根目录的 `index.html`
- 或者通过 `vite.config.ts` 配置

**配置方式**：

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),      // 主入口
        nested: resolve(__dirname, 'nested.html'),  // 多页应用的其他入口
      }
    }
  }
})
```

**本项目的配置**：

```typescript
// packages/web/vite.config.ts
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html')
    }
  }
}
```

**index.html 的作用**：

```
index.html
    │
    ▼
<script type="module" src="/src/main.ts"></script>
    │
    ▼
加载 Vue 应用入口 (main.ts)
    │
    ▼
createApp(App).mount('#app')
```

**本质**：`index.html` 是 Vite 服务的入口，Vite 会从这个 HTML 开始，按需编译引入的模块。

**关键点**：

| 情况 | 是否需要 index.html |
|------|-------------------|
| 单页应用 (SPA) | ✅ 通常需要 |
| 多页应用 | ✅ 可以有多个 HTML 入口 |
| 仅构建库 | ❌ 不需要 HTML 文件 |

#### 3. 环境变量

Vite 使用 `VITE_` 前缀定义环境变量：

```typescript
// 在代码中使用
console.log(import.meta.env.VITE_OPENAI_API_KEY)

// .env.local 文件示例
VITE_OPENAI_API_KEY=your_key_here
```

在本项目中：
- `envDir: monorepoRoot` 让 Vite 从 monorepo 根目录读取 `.env.local`
- 这样可以共享同一套环境变量给所有子包

#### 3. 依赖预构建 (optimizeDeps)

首次启动时，Vite 会预构建依赖：
理论上这个地方不需要进行手动预构建，因为Vite会自动对第三方包进行预构建，只有自动预构建失败时才需要手动预构建。

```typescript
optimizeDeps: {
  include: ['element-plus'],  // 预构建 Element Plus
}
```

预构建的好处：
- 将 CommonJS 转换为 ESM
- 合并小模块减少请求数
- 缓存结果，下次启动更快

#### 4. 路径别名 (resolve.alias)

```typescript
resolve: {
  alias: {
    '@': resolve(__dirname, 'src'),  // @/xxx → src/xxx
  }
}
```

在代码中直接使用：
```typescript
import App from '@/App.vue'
```

#### 5. 生产构建 (build)

```typescript
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html')
    }
  }
}
```

使用 Rollup 进行生产构建，输出到 `dist/` 目录。

### Vite 常用命令

| 命令 | 说明 |
|------|------|
| `vite` | 启动开发服务器 |
| `vite build` | 生产构建 |
| `vite preview` | 预览生产构建结果 |
| `vite --force` | 强制重新预构建依赖 |

### 本项目中的 Vite 配置亮点

1. **Monorepo 环境变量共享** - 通过 `envDir` 指向根目录
2. **跨包监视** - `watch.ignored` 确保修改 `@prompt-optimizer/ui` 时自动重载
3. **工作区依赖服务** - `fs.allow` 允许为本地包提供服务
4. **多包别名** - 同时为 core、ui、web、extension 设置别名

---

## pnpm 运行原理详解

### 概念

pnpm 使用独特的 **内容寻址存储（Content Addressable Store）** 机制管理依赖，核心目录：

| 目录 | 位置 | 作用 |
|------|------|------|
| `.pnpm-store` | 项目根目录或全局 | **真实存储** - 下载的包原始文件 |
| `node_modules/.pnpm` | `node_modules/.pnpm/` | **虚拟存储** - 包的硬链接入口 |

### 执行流程

```
pnpm run dev
    │
    ▼
读取 packages/web/package.json
    │
    ▼ scripts.dev = "vite --force"
    │
    ▼
在 packages/web/node_modules/.bin/ 中查找 vite
    │
    ▼ 找到后执行
packages/web/node_modules/.bin/vite --force
```

### pnpm 如何找到 vite

pnpm 会在以下位置按顺序查找：

```
1. packages/web/node_modules/.bin/vite  ← 主要查找位置
          │
          ▼ 如果没有
2. 向上查找父目录的 node_modules/.bin/
          │
          ▼ 如果都没有
3. 报错 "command not found"
```

### .bin 目录是怎么形成的？

执行 `pnpm install` 时，pnpm 会：

```
1. 读取 package.json 中的 dependencies
2. 从 npm registry 下载包到 pnpm store（全局缓存）
3. 在当前包的 node_modules 中创建 .bin 目录
4. .bin 目录中的文件是指向 .pnpm 目录的软链接
```

### pnpm 的存储结构

pnpm 使用独特的 **硬链接 + 软链接** 结构：

```
node_modules/
    ├── .pnpm/                    # 实际存储位置（通过硬链接指向全局 store）
    │   └── vite@7.2.7/
    │       └── node_modules/
    │           └── vite/
    │               └── bin/
    │                   └── vite.js
    │
    └── .bin/                     # 软链接，方便调用
        └── vite → ../../.pnpm/vite@7.2.7/.../vite.js
```

### NODE_PATH 的作用

#### 什么是 NODE_PATH？

**NODE_PATH** 是 Node.js 的内置环境变量，用于扩展模块搜索路径。它的作用是：告诉 Node.js 在默认查找规则之外，额外去哪些目录中寻找模块（`require()` 或 `import` 的包）。

#### Node.js 默认如何找模块？

当你写代码 `const vite = require('vite')` 时，Node.js 按以下顺序查找：

```
1. 内置模块（如 fs, path）→ 直接返回
2. 当前目录的 node_modules/
3. 逐级向上遍历父目录，查找 node_modules/
4. 全局安装目录（如 ~/.npm-global/lib/node_modules）
5. NODE_PATH 指定的目录（如果设置了）
```

#### pnpm 设置的 NODE_PATH

pnpm 生成的启动脚本会设置一个很长的 NODE_PATH：

```bash
export NODE_PATH="/Users/pcm/.../vite@7.2.7_.../vite/bin/node_modules:
                  /Users/pcm/.../vite@7.2.7_.../vite/node_modules:
                  /Users/pcm/.../vite@7.2.7_.../node_modules:
                  /Users/pcm/.../node_modules/.pnpm/node_modules"
```

这告诉 Node.js：去这些位置找模块。

#### 为什么需要这么长？

因为 pnpm 的依赖是**隔离存储**的：

```
传统 npm 结构：
node_modules/
    vite/
        node_modules/
            jiti/        ← 直接能找到

pnpm 结构：
.pnpm/
    vite@7.2.7_.../
        node_modules/
            vite/
                bin/vite.js
                node_modules/
                    jiti/    ← 在深处，Node.js 默认找不到！
```

如果不用 NODE_PATH，Node.js 找不到 `vite` 内部的 `jiti`、`yaml` 等依赖。

#### 验证方法

```bash
# 查看当前的 NODE_PATH
echo $NODE_PATH

# 在 Node.js 中查看
node -e "console.log(process.env.NODE_PATH)"
```

### 硬链接 vs 软链接（操作系统层面）

这是**文件系统提供的原生功能**，不是 pnpm 发明的。任何编程语言或工具都可以使用这些系统调用。

#### 什么是文件系统？

**文件系统**是操作系统的一部分，负责管理和组织磁盘上的数据。简单来说，它决定了：

- 文件如何存放
- 文件如何查找
- 文件如何保护

常见的文件系统：
| 操作系统 | 常见文件系统 |
|----------|------------|
| Windows | NTFS, FAT32, exFAT |
| macOS | APFS, HFS+ |
| Linux | ext4, XFS, Btrfs |

#### 文件系统的核心概念

```
用户视角：
  文件 "demo.txt"

操作系统视角：
  文件名 → inode（身份证号）→ 数据块（磁盘上的实际位置）

文件系统视角：
  目录项 → inode 表 → 数据块
```

**三个关键概念**：

1. **目录项（Directory Entry）**
   - 存储"文件名"和"inode"的对应关系
   - 就像一本书的"目录页"，告诉你第几章在第几页

2. **inode（Index Node）**
   - 文件的"身份证号"
   - 存储文件的元数据（大小、权限、时间等）
   - 不存储文件名，只存储文件信息

3. **数据块（Data Block）**
   - 磁盘上真正存放数据的地方
   - inode 中存储了指向哪些数据块的指针

#### 文件存储流程

当你创建一个文件 `hello.txt`，内容为 "Hello"：

```
1. 操作系统分配一个空闲的 inode（假设是 123456）
2. 把文件信息写入 inode 表：
   - 类型：普通文件
   - 大小：5 字节
   - 权限：rw-r--r--
   - 指向数据块：块 1001

3. 在目录中创建目录项：
   - 文件名：hello.txt
   - inode：123456

4. 把数据 "Hello" 写入数据块 1001
```

#### 读取文件流程

当你读取 `hello.txt`：

```
1. 在目录中查找 "hello.txt"
   → 找到 inode：123456

2. 读取 inode 123456
   → 知道数据在块 1001

3. 读取数据块 1001
   → 返回内容 "Hello"
```

#### 文件系统的层级结构

```
应用程序
    ↓ write("hello.txt", "Hello")
操作系统
    ↓ 系统调用
文件系统
    ↓
┌─────────────────────────────────────────┐
│  目录区（目录文件）                       │
│  "hello.txt" → inode 123456            │
├─────────────────────────────────────────┤
│  inode 表                                │
│  inode 123456: 大小=5, 块=1001          │
├─────────────────────────────────────────┤
│  数据区                                  │
│  块 1001: "Hello"                       │
└─────────────────────────────────────────┘
磁盘
```

#### 目录也是文件？

在文件系统中，**目录本质上也是一种文件**。

- 普通文件：数据块存储用户数据
- 目录文件：数据块存储"文件名 → inode"的映射表

```
目录的内容示例：
.
..
file1.txt -> inode 123456
file2.txt -> inode 789012
subdir/   -> inode 555555
```

- `.` 代表当前目录
- `..` 代表父目录

#### 文件系统的系统调用

编程时可以直接调用文件系统操作：

```c
// Linux 系统调用示例
open("hello.txt", O_RDONLY)    // 打开文件
read(fd, buffer, 100)           // 读取文件
write(fd, "Hello", 5)           // 写入文件
unlink("hello.txt")             // 删除文件
link("a.txt", "b.txt")          // 创建硬链接
symlink("a.txt", "c.txt")       // 创建软链接
```

这些是操作系统内核提供的接口，npm、pnpm、vim 等工具底层都是调用这些函数。

#### 文件系统与 pnpm 的关系

pnpm 正是利用文件系统的特性来实现高效管理：

- **硬链接**：多个目录项指向同一个 inode，节省空间
- **软链接**：目录文件中存储另一个文件的路径
- **inode**：确保即使原文件删除，硬链接仍然有效

---

#### 文件系统的底层原理

要理解硬链接和软链接，需要先了解文件系统的存储结构。

**文件系统的组成**：

```
磁盘 =
┌─────────────────────────────────────────────────────────────┐
│  目录区（存放文件名和 inode 的对应关系）                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 文件名 "test.txt" → inode 123456                   │   │
│  │ 文件名 "a.txt"    → inode 789012                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  inode 区（存放文件的元数据）                                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ inode 123456: 类型=文件, 大小=100, 链接数=1         │   │
│  │ inode 789012: 类型=目录, 大小=4096, 链接数=2        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  数据区（存放文件的实际内容）                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ inode 123456 对应的数据: "Hello World"               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**inode（索引节点）** 是文件的"身份证号"，每个文件都有一个唯一的 inode，存储以下信息：
- 文件类型（普通文件、目录、链接等）
- 文件大小
- 文件权限
- 创建时间、修改时间
- 链接数（有多少个文件名指向这个 inode）
- 指向数据块的指针

#### 硬链接

**概念**：同一个 inode 的多个文件名

```bash
# 创建硬链接
ln 源文件 目标文件
```

**底层原理**：

```
创建 "test.txt" 后：
目录区：
┌─────────────────────────────────────┐
│ "test.txt" → inode 123456 (链接数:1)│
└─────────────────────────────────────┘

执行 ln test.txt test_hard.txt 后：
目录区：
┌─────────────────────────────────────┐
│ "test.txt"    → inode 123456 (链接数:2)│
│ "test_hard.txt" → inode 123456 (链接数:2)│
└─────────────────────────────────────┘
      ↑                    ↑
      └──── 同一份数据 ────┘
```

**关键点**：
- 两个文件名指向**同一个 inode**
- 共享同一份数据
- 链接数从 1 变成 2

**删除操作的实际行为**：

```bash
rm test.txt
```

```
删除 "test.txt" 后：
目录区：
┌─────────────────────────────────────┐
│ "test_hard.txt" → inode 123456 (链接数:1)│  ← 仍然存在！
└─────────────────────────────────────┘
```

**删除操作实际做了什么**：只是把"test.txt"这个文件名从目录中**移除了**，把链接数从 2 改成 1。**并没有删除 inode 和数据**！

只有当链接数变成 **0** 时，系统才会真正删除数据和 inode。

#### 软链接/符号链接

**概念**：一个独立的文件，内容是另一个文件的"路径"

```bash
# 创建软链接
ln -s 源文件 目标文件
```

**底层原理**：

```
执行 ln -s test.txt test_soft.txt 后：
目录区：
┌─────────────────────────────────────────────────────┐
│ "test.txt"     → inode 123456 (普通文件)           │
│ "test_soft.txt"→ inode 999999 (软链接类型)          │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
              inode 999999 的内容: "test.txt"
```

软链接是一个**独立的文件**，它的数据部分存储的是"指向哪个文件"的路径字符串。

**如果原文件被删除**：

```
删除 "test.txt" 后：
目录区：
┌─────────────────────────────────────────────────────┐
│ "test_soft.txt"→ inode 999999 (内容: "test.txt")  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
              指向 "test.txt"，但这个文件已经不存在了！
              → 软链接失效
```

#### 硬链接 vs 软链接对比

| 特性 | 硬链接 | 软链接 |
|------|--------|--------|
| 本质 | 同一 inode 的多个名字 | 独立的文件，内容是路径 |
| 删除原文件 | 另一个仍可用 | 软链接失效 |
| 链接数 | 有（记录在 inode） | 无（只是普通文件） |
| 跨分区 | ❌ 不能 | ✅ 可以 |
| 目录 | ❌ 不能 link 目录 | ✅ 可以 |
| 磁盘空间 | 不额外占用 | 几乎不占用 |

#### 验证命令

```bash
# 查看文件 inode
ls -li test.txt

# 创建硬链接
ln test.txt test_hard.txt

# 创建软链接
ln -s test.txt test_soft.txt

# 查看结果
ls -li
# 输出示例：
# 1234567 -rw-r--r-- 2 pcm staff 6 test.txt      ← 链接数 2
# 1234567 -rw-r--r-- 1 pcm staff 6 test_hard.txt ← 同一 inode
# 1234568 lrwxr-xr-x 1 pcm staff 8 test_soft.txt → test.txt

# 解释：
# -rw-r--r--  链接数(2)  所有者  大小  修改时间  文件名
# lrwxrwxrwx  软链接标识  指向
```

#### 在 pnpm 中的应用

```
~/.pnpm/vite@7.2.7/bin/vite.js  ← 原始文件，inode: 123456

packages/web/node_modules/.pnpm/vite@7.2.7/.../vite.js
    ← 硬链接，共享同一个 inode: 123456

packages/web/node_modules/.bin/vite
    ← 软链接，内容是 "vite.js" 的路径
```

这样设计的好处：
- **硬链接**：即使误删全局 store，其他项目的硬链接仍然可用
- **软链接**：`.bin/` 目录清晰方便调用

### pnpm 为什么需要两者？

| 链接类型 | 使用位置 | 原因 |
|---------|---------|------|
| **硬链接** | `.pnpm/` 目录 | 节省磁盘空间 + 保证文件不被误删 |
| **软链接** | `.bin/` 目录 | 方便调用快捷方式 |

**如果只用软链接**：
- 如果删除全局 store 中的原文件，所有软链接都会失效

**使用硬链接后**：
- 全局只存一份文件
- 只有当所有硬链接都被删除时，文件才真正消失
- 安全！

### 全局 store 在哪里？

**实际上有两层**：

```
1. ~/.pnpm/（全局 store）
   - pnpm 下载的包真正存放的位置
   - 所有项目共享
   - 位置：~/.pnpm 或 ~/.local/share/pnpm

2. 当前项目的 node_modules/.pnpm/
   - 不是全局 store，而是"指向全局 store 的硬链接目录"
   - 每个项目都有自己独立的 .pnpm 目录
```

**安装流程**：
```
pnpm install vite

    ↓
检查 ~/.pnpm 是否已有 vite@7.2.7
    │
    ├── 如果有 → 创建硬链接到项目的 .pnpm 目录
    │
    └── 如果没有 → 下载到 ~/.pnpm，再创建硬链接
```

#### pnpm store 常用命令

```bash
# 查看 store 路径
pnpm store path

# 查看 store 大小
du -sh $(pnpm store path)

# 清理未使用的包
pnpm store prune

# 列出 store 中的包
pnpm store list
```

#### 本项目 store 情况

| 配置项 | 值 | 说明 |
|--------|-----|------|
| 项目 `.npmrc` | 无 `store-dir` | 使用全局 store |
| 全局 store | `~/Library/pnpm/store/v10` | 当前大小约 6.7G |
| 项目 `.pnpm-store/` | 空目录 | 无实际用途 |

#### 使用本地 store

在项目 `.npmrc` 中添加：
```ini
store-dir=.pnpm-store
```

### npm vs pnpm vs npx 对比

| 命令 | 查找顺序 | 是否自动下载 |
|------|----------|-------------|
| `pnpm run dev` | 当前包 .bin → 向上查找 | ❌ 否 |
| `pnpm vite --force` | 当前包 .bin → 向上查找 | ❌ 否 |
| `npm vite --force` | 当前 .bin（不向上查找） | ❌ 否 |
| `npx vite --force` | 当前 .bin → $PATH → 缓存 → npm | ✅ 是，下载到 ~/.npm/_npx/ |

### 常见问题

**Q: 为什么直接执行 `vite --force` 报错？**

A: 因为 vite 没有全局安装，系统 PATH 中找不到。应该用 `pnpm run dev` 或 `pnpm vite --force`。

**Q: npx 会下载到哪里？**

A: 下载到 `~/.npm/_npx/` 临时目录，执行完后可以删除。

**Q: pnpm 和 npm 的核心区别？**

A:
| 方面 | npm | pnpm |
|------|-----|------|
| 依赖结构 | 扁平化 | 虚拟化 |
| 磁盘空间 | 每个项目独立安装 | 全局 store 复用 |
| .bin 查找 | 不向上查找 | 向上查找 |

### Monorepo 根配置共享模式

#### 什么是根配置共享

在 monorepo 项目中，将基础配置文件（如 `vite.config.ts`、`tsconfig.json`）放在根目录，子包引用并扩展这些基础配置。

#### 本项目结构

```
my-monorepo/
├── vite.config.ts              ← 基础配置（getBaseConfig）
└── packages/
    ├── my-design/
    │   └── vite.config.ts     ← 导入并扩展 getBaseConfig
    ├── my-lib/
    │   └── vite.config.ts     ← 导入并扩展 getBaseConfig
    └── my-hooks/
        └── vite.config.ts     ← 导入并扩展 getBaseConfig
```

#### 常用模式对比

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| **根配置共享** ✓ | 根目录放基础配置，子包引用 | 组件库、工具库 |
| 独立配置 | 每个子包独立完整配置 | 差异化较大的项目 |
| 继承覆盖 | 子包可覆盖父配置 | 需要灵活定制的项目 |

#### 优缺点

**优点**：
- **减少重复**：基础配置写一次，子包复用
- **统一规范**：所有子包使用相同的构建/测试配置
- **易维护**：修改一次即可同步到所有子包

**缺点**：
- **耦合**：子包依赖根配置，独立性降低
- **灵活性差**：子包无法轻易自定义

#### 典型案例

- Ant Design
- Fluent UI
- Vue Core
- Turborepo 示例项目

### Monorepo 依赖声明 & 路径替换

#### 依赖声明：谁用谁声明

- **原则**：**谁 `import`，谁在自己的 `package.json` 里声明依赖**，根依赖不会自动"算进"子包里。
- **示例**：如果 `packages/my-lib/rollup.config.mjs` 中使用了 `fs-extra` 和 `rimraf`，需要在 `packages/my-lib/package.json` 的 `devDependencies` 中声明。

#### 路径替换：从源码路径到正式包名

- **问题**：早期代码里可能存在跨包引用源码路径，例如：
  ```ts
  import { xxx } from '@myorg/my-tools/src/xxx';
  ```
  打包后的产物如果还带着 `@myorg/my-tools/src/...`，使用方项目里找不到这条路径。

- **解决**：在 rollup 里加一个插件 `replaceImportPath`，在 `generateBundle` 阶段对输出代码做字符串替换：
  ```js
  function replaceImportPath() {
    return {
      name: 'replaceImportPath',
      generateBundle(_, chunkInfo) {
        for (const name of Object.keys(chunkInfo)) {
          const rawCode = chunkInfo[name].code;
          const reg1 = /@myorg\/my-tools\/src[^'"]*/g;
          const reg2 = /@myorg\/my-hooks\/src[^'"]*/g;
          const reg3 = /@myorg\/my-design\/src[^'"]*/g;

          const replacedCode = rawCode
            ?.replace(reg1, '@myorg/my-tools')
            ?.replace(reg2, '@myorg/my-hooks')
            ?.replace(reg3, '@myorg/my-design');

          chunkInfo[name].code = replacedCode?.replace(
            /'react\/jsx-runtime'/g,
            "'react/jsx-runtime.js'",
          );
        }
      },
    };
  }
  ```

- **含义**：
  - 打包时自动把内部源码路径替换成对外暴露的 npm 包名（`@myorg/my-tools` 等）
  - 是一种"迁移期过渡方案"：当源码里还残留 `@myorg/my-tools/src/...` 这类写法时，通过构建阶段修正产物，保证对外包可以正常使用

---

## 架构概览

### Monorepo 结构

```
packages/core (核心业务逻辑)
        ↓
packages/ui (Vue 组件)
        ↓
packages/web | extension | desktop (应用层)
```

### 核心服务 (`packages/core/src/services/`)

- **llm/** - LLM API 集成 (OpenAI、Gemini、DeepSeek 等)
- **model/** - 模型配置管理，支持高级参数
- **prompt/** - 提示词优化和测试
- **template/** - 模板管理 (CSP 安全处理)
- **history/** - 优化历史记录
- **storage/** - 多适配器存储 (localStorage、IndexedDB、文件系统)
- **preference/** - 用户偏好设置

### Electron 架构

桌面端采用 **代理模式**：
- 主进程运行所有核心服务
- 渲染进程通过 `*-electron-proxy.ts` 文件调用
- IPC 序列化处理复杂对象传递
- 业务逻辑保持在共享的核心服务中

---

## 部署方式

1. **Web** - Vercel 部署 (纯前端，无跨域限制问题)
2. **Desktop** - Electron 应用 (无跨域限制，可连接本地模型)
3. **Chrome Extension** - 浏览器插件
4. **Docker** - 包含 MCP 服务器 (`/mcp` 路径)

---

## 常用命令

以下命令均在**项目根目录**执行，对应根目录 `package.json` 的 `scripts`。

### 快速参考

```bash
# 开发
pnpm dev:fresh         # 清理缓存并重启开发服务（推荐首次/异常时用）
pnpm dev               # 构建 core/ui 后启动 Web 开发（ui watch + web dev）
pnpm dev:desktop       # 开发桌面应用（web dev + desktop 并行）
pnpm dev:desktop:fresh # 清理并重启桌面开发
pnpm dev:ext           # 仅开发 Chrome 扩展

# 构建
pnpm build             # 全量构建：core → ui → (web + ext 并行)
pnpm build:desktop     # 桌面用：core → ui → web → desktop

# 测试
pnpm test              # 单元测试 + 智能 E2E
pnpm test:unit         # 仅单元测试（所有包递归）
pnpm test:e2e          # 完整 Playwright E2E
pnpm test:e2e:smart    # 智能选择 E2E（脚本决策）

# MCP / 代码检查 / 清理
pnpm mcp:dev / mcp:build / mcp:start / mcp:test
pnpm lint / lint:fix   # 仅对 ui 包执行
pnpm clean             # 清理 dist 与 vite 缓存
pnpm kill:dev          # 终止占用端口的开发进程
```

### 根 package.json 脚本说明

按类别说明各命令作用（与根目录 `package.json` 的 `scripts` 对应）。

#### 构建 (build)

| 命令 | 说明 |
|------|------|
| `build` | 顺序执行 build:core → build:ui，再**并行** build:web、build:ext；全量构建 Web 与扩展 |
| `build:core` | 仅构建 `@prompt-optimizer/core`（tsup 输出到 dist） |
| `build:ui` | 仅构建 `@prompt-optimizer/ui` |
| `build:parallel` | 并行执行 build:web、build:ext |
| `build:web` | 仅构建 Web 应用（Vite build） |
| `build:ext` | 仅构建 Chrome 扩展 |
| `build:desktop-only` | 仅构建 Electron 桌面包（不包含 core/ui/web 的构建） |
| `build:desktop` | 顺序：build:core → build:ui → build:web → build:desktop-only；打桌面版前用 |

#### 开发 (dev)

| 命令 | 说明 |
|------|------|
| `dev` | 先 clean:dist，再构建 core、ui，最后并行：ui 的 `build --watch` + web 的 `dev`（本地 Web 开发） |
| `dev:fresh` | 先 kill:dev → clean → pnpm install，再执行 dev；清理缓存并重装依赖后启动，异常时推荐 |
| `dev:parallel` | 并行：`pnpm -F @prompt-optimizer/ui build --watch`、`pnpm -F @prompt-optimizer/web dev` |
| `dev:ext` | 仅启动扩展开发（`@prompt-optimizer/extension dev`） |
| `dev:desktop` | 先 clean:dist、构建 core/ui，再 dev:desktop:parallel |
| `dev:desktop:fresh` | kill:dev → clean → pnpm install → dev:desktop；桌面开发前做一次干净安装并启动 |
| `dev:desktop:parallel` | 并行：web dev、desktop dev（Electron 会加载本地 web 服务） |

**dev:parallel 与 concurrently**

`dev:parallel` 用 **concurrently** 在同一个终端里**并行**跑两条命令：

1. `pnpm -F @prompt-optimizer/ui build --watch`：UI 包构建并开 watch，改文件自动重编。
2. `pnpm -F @prompt-optimizer/web dev`：启动 Web 的 Vite 开发服务（如 http://localhost:18181）。

参数含义：**`-k`** 表示有一个子进程退出就把其他一起结束；**`-p \"[{name}]\"`** 给每条输出加前缀；**`-n \"UI,WEB\"`** 给两个进程起名为 UI、WEB，终端里会看到 `[UI]`、`[WEB]` 的日志。concurrently 的作用就是在一条 script 里同时跑多个命令并统一管理输出与退出。

#### 测试 (test)

| 命令 | 说明 |
|------|------|
| `test` | 先跑 test:unit，再跑 test:e2e:smart（单元 + 智能 E2E） |
| `test:unit` | 对所有 workspace 包递归执行 `pnpm test`（`--run` 单次，`--passWithNoTests` 无测试也通过） |
| `test:e2e` | 直接执行 Playwright 全部 E2E |
| `test:e2e:smart` | 运行 `scripts/smart-e2e.js`，由脚本选择要跑的 E2E |
| `test:e2e:record` | 以录制模式跑 Playwright（E2E_VCR_MODE=record） |
| `test:e2e:replay` | 以回放模式跑 Playwright（E2E_VCR_MODE=replay） |
| `test:gate:core` | 仅跑 core 的 test:gate（核心门禁用例） |
| `test:gate:ui` | 先构建 core，再跑 ui 的 test |
| `test:gate:e2e` | 跑指定 E2E：regression + p0-route-smoke |
| `test:gate` | 顺序执行 test:gate:core、test:gate:ui（CI 门禁） |
| `test:gate:full` | test:gate 后再跑 test:gate:e2e（完整门禁） |
| `test:fast` | 与 test:unit 相同，全包递归单次测试 |
| `test:e2e:ui` | Playwright 的 UI 模式（交互选用例） |
| `test:e2e:debug` | Playwright 的 debug 模式 |

#### 清理 (clean)

| 命令 | 说明 |
|------|------|
| `clean` | 执行 clean:dist 和 clean:vite |
| `clean:dist` | 删除各包的 dist 及 desktop/web-dist |
| `clean:vite` | 删除各包下的 `node_modules/.vite` 缓存 |

#### 版本与发布 (version)

| 命令 | 说明 |
|------|------|
| `version:sync` | 运行 `scripts/sync-versions.js`，同步各子包版本号 |
| `version` | 先 version:sync，再 `git add -A` |
| `version:prepare` | `pnpm version --no-git-tag-version`，只改版本号不打 tag |
| `version:tag` | 用当前 package.json 的 version 打 git tag |
| `version:publish` | 推送当前版本对应的 tag 到远端 |

#### MCP 服务 (mcp)

| 命令 | 说明 |
|------|------|
| `mcp:build` | 构建 `@prompt-optimizer/mcp-server` |
| `mcp:dev` | 以开发模式启动 MCP 服务 |
| `mcp:start` | 启动 MCP 服务（生产模式） |
| `mcp:test` | 运行 MCP 服务的测试 |

#### 代码检查 (lint)

| 命令 | 说明 |
|------|------|
| `lint` | 仅对 `@prompt-optimizer/ui` 执行 lint |
| `lint:fix` | 仅对 ui 执行 lint 并自动修复 |

#### BMAD 相关 (bmad)

| 命令 | 说明 |
|------|------|
| `bmad:refresh` | 执行 bmad-method install -f -i codex，刷新 BMAD 与 Codex 配置 |
| `bmad:list` | 列出 BMAD agents |
| `bmad:validate` | 校验 BMAD 配置 |

#### 其他

| 命令 | 说明 |
|------|------|
| `pnpm-install` | 仅执行 `pnpm install`（常被 dev:fresh 等串联使用） |
| `kill:dev` | 运行 `scripts/kill-dev.js`，终止占用端口的开发进程（如 18181） |

#### npm-run-all 是什么？

根脚本里的 `build`、`dev`、`test` 等复杂流程用 **npm-run-all** 把多条 script 串起来执行。它是一个 npm 包，用来**按顺序或并行执行多条本包 `package.json` 里的 script**，不用手写一长串 `&&` 或开多个终端。

**常用用法：**

- **顺序执行**：`npm-run-all build:core build:ui build:parallel` → 先跑完 build:core，再 build:ui，再 build:parallel。
- **并行执行**：`npm-run-all --parallel build:web build:ext` → 同时跑 build:web 和 build:ext。
- **`-s`**：前一个失败就停止，不继续后面的（视版本而定）。

**执行原理简述：**

1. **输入**：你传入的是 script 名字（如 `build:core`），它会读当前目录 `package.json` 的 `scripts`，找到对应命令（如 `pnpm -F @prompt-optimizer/core build`）。只执行本包已定义的 script，不执行任意 shell。
2. **顺序模式**：对每个 script 名字起一个子进程（内部用 `npm run <script>` 或等价方式），等该进程退出后再启动下一个；任一非 0 退出可配置为立即停止。
3. **并行模式**：对多个 script 同时各起一个子进程，等全部结束后再根据退出码决定整体成功/失败。
4. **与 pnpm**：在 pnpm 项目里通常仍通过 npm 的 run-script 接口触发（或直接 `pnpm run xxx`），真正执行 `pnpm -F ...` 的是子进程里的 npm/pnpm。

可简单记：**npm-run-all = 按你给的 script 名字列表，用子进程顺序或并行地执行 `npm run <名字>`，并管理顺序与退出码。**

---

## 开发服务器访问地址

执行 `pnpm dev` 或 `pnpm dev:fresh` 后，终端会输出三条访问地址，例如：

```
Local:   http://localhost:18181/
[WEB]   ➜  Network: http://192.168.1.102:18181/
[WEB]   ➜  Network: http://198.18.0.1:18181/
```

| 地址 | 含义 |
|------|------|
| **localhost:18181** | 本机访问，在浏览器打开即可 |
| **192.168.1.102:18181** | 局域网地址，同一 WiFi 下的手机/其他电脑可访问 |
| **198.18.0.1:18181** | 虚拟网卡地址（Cursor、VPN 等），一般可忽略 |

**配置位置：** `packages/web/vite.config.ts` 中的 `server`：

- **`port: 18181`**：固定端口号
- **`host: true`**：监听所有网卡（`0.0.0.0`），Vite 会为每个网络接口各打印一条 URL，因此出现多条

**可选调整：**

- 只在本机访问、不显示多条：将 `host: true` 改为 `host: false`（或删除），则仅显示 localhost，局域网设备无法访问
- 修改端口：改 `port: 18181` 为其他数字即可

---

## 学习路径

### 阶段一：环境搭建

1. 阅读 `dev.md` 搭建开发环境
2. 运行 `pnpm dev:fresh` 启动开发服务器
3. 访问本地地址体验产品

### 阶段二：核心服务

推荐阅读顺序：

1. **`packages/core/src/services/storage/`** - 存储服务，了解数据持久化
2. **`packages/core/src/services/llm/`** - LLM 服务，了解如何调用 AI
3. **`packages/core/src/services/model/`** - 模型管理，了解配置管理
4. **`packages/core/src/services/prompt/`** - 提示词优化核心逻辑

### 阶段三：UI 层

1. **`packages/ui/src/composables/`** - 状态管理 (Composable 模式)
2. **`packages/ui/src/components/`** - Vue 组件实现
3. 重点组件：`AdvancedTestPanel.vue` - 高级测试面板

### 阶段四：桌面端

1. **`packages/desktop/`** - Electron 主进程
2. **`docs/developer/desktop-developer-guide.md`** - 桌面开发指南
3. **`docs/developer/electron-ipc-best-practices.md`** - IPC 最佳实践

---

## 关键文档

| 文档 | 说明 |
|------|------|
| `dev.md` | 开发环境搭建详细指南 |
| `docs/developer/project-structure.md` | 详细项目结构 |
| `docs/developer/technical-development-guide.md` | 技术开发指南 |
| `docs/developer/llm-params-guide.md` | LLM 参数配置指南 |
| `docs/developer/desktop-developer-guide.md` | 桌面端开发指南 |
| `docs/developer/electron-ipc-best-practices.md` | Electron IPC 最佳实践 |

---

## 二次开发指南

### 添加新的 LLM 提供商

1. 在 `packages/core/src/services/llm/` 下创建新的服务目录
2. 实现标准的 LLM 接口
3. 在 `packages/core/src/services/model/` 注册新模型
4. 在 UI 的模型选择器中添加选项

### 修改 UI 组件

1. 组件位于 `packages/ui/src/components/`
2. 优先使用 **Naive UI** 组件
3. 使用 Vue 3 Composition API
4. 遵循 `theme-manager-*` CSS 类主题系统

### 修改核心业务逻辑

1. 业务逻辑在 `packages/core/src/services/`
2. Electron 桌面端通过代理模式调用核心服务
3. 修改服务后需同时更新代理层 (`*-electron-proxy.ts`)

---

## 代码规范

### Commit 规范

```bash
feat(ui): 添加新功能
fix(core): 修复问题
docs: 更新文档
perf: 性能优化
refactor: 重构
```

### 代码审查要点

- 深层风险审查（三步审查法）：
  1. **逻辑审查** - 模拟用户高频/并发/异常操作
  2. **状态管理审查** - 追踪完整场景验证状态同步
  3. **通信链路审查** - 验证模块间事件传递完整性

---

## 项目完整结构

### 根目录文件

| 文件 | 说明 |
|------|------|
| `package.json` | 根包配置，定义所有子包和脚本 |
| `pnpm-workspace.yaml` | pnpm 工作空间配置（声明哪些包属于同一个 monorepo） |
| `tsconfig.json` | TypeScript 根配置 |
| `tailwind.config.js` | Tailwind CSS 配置 |
| `.env.local.example` | 环境变量示例 |
| `Dockerfile` | Docker 镜像构建 |
| `docker-compose.yml` | Docker Compose 配置 |

#### `pnpm-workspace.yaml` 作用说明

- **Workspace 声明**：通过 `packages:` 列表告诉 pnpm「哪些目录里的 `package.json` 属于这个工作区」。
- **本地联调**：子包之间（如 `@prompt-optimizer/web`、`@prompt-optimizer/ui`、`@prompt-optimizer/core`）可以互相作为本地依赖使用，而不是从 npm 下载。
- **共享依赖**：所有子包共用根目录的 `pnpm-lock.yaml` 和 `node_modules` 结构，减少重复安装。
- **跨包命令**：支持 `pnpm -F @prompt-optimizer/web dev`、`pnpm -r test` 这类「对指定包/所有包」执行命令。

> 新建 monorepo 时需要手动创建这个文件；在本项目中已配置好，只在**新增或移动包目录**时才需要调整。

#### pnpm -F 与 pnpm -r

- **`pnpm -F`**（`--filter`）：只对**指定的包**执行命令。
  - 例：`pnpm -F @prompt-optimizer/web dev`、`pnpm -F @prompt-optimizer/core test`
  - 可按包名或通配符过滤，如 `pnpm -F "*web*" test`。
- **`pnpm -r`**（`--recursive`）：对 **workspace 里所有包** 递归执行同一命令。
  - 例：`pnpm -r test` 会在每个子包里执行 `pnpm test`（根脚本里的 `test:unit` 即用此方式）。
- **何时用哪个**：只改某个包时用 `-F`；全仓检查/回归用 `-r` 或根脚本。可记：**F = Filter（筛选包），r = recursive（所有包都跑）**。

#### ignoredBuiltDependencies

在 `pnpm-workspace.yaml` 中配置，例如：

```yaml
ignoredBuiltDependencies:
  - electron
  - electron-winstaller
  - esbuild
  - vue-demi
```

- **作用**：这些依赖会正常安装，但 **不执行它们的安装/构建脚本**（如 postinstall、prepare、node-gyp 等）。可加快安装、减少环境差异导致的脚本报错。
- **不编译这些包会有问题吗？** 一般不会。这些包都是「发布时已编译好」的：
  - **electron**：预编译二进制，桌面打包由 electron-builder 等处理。
  - **electron-winstaller**：打 Windows 安装包用，无强依赖的 install 脚本。
  - **esbuild**：包内带各平台预编译二进制，多数场景跳过脚本仍可用。
  - **vue-demi**：纯 JS 兼容层，无原生编译。
- 若出现 Electron 起不来、esbuild 报缺二进制等，可把对应包从 `ignoredBuiltDependencies` 中移除后再 `pnpm install`。

### 脚本目录 `scripts/`

| 文件 | 说明 |
|------|------|
| `kill-dev.js` | 终止开发服务器进程 |
| `smart-e2e.js` | 智能选择 E2E 测试 |
| `sync-versions.js` | 同步所有包版本号 |

---

### packages/core 核心包

**目录结构：**

```
packages/core/
├── src/
│   ├── index.ts                 # 包入口，导出所有服务
│   ├── constants/               # 常量定义
│   │   ├── error-codes.ts       # 错误码定义
│   │   └── storage-keys.ts      # 存储键名定义
│   ├── types/                   # 全局类型定义
│   ├── utils/                   # 工具函数
│   └── services/                # 核心服务层 ⭐
│       ├── index.ts             # 服务导出入口
│       ├── llm/                 # LLM API 集成 ⭐⭐⭐
│       │   ├── service.ts       # LLM 服务主类
│       │   ├── types.ts         # 类型定义
│       │   ├── errors.ts        # 错误类
│       │   ├── electron-proxy.ts # Electron 代理
│       │   └── adapters/        # LLM 适配器
│       │       ├── abstract-adapter.ts # 抽象基类
│       │       ├── openai-adapter.ts    # OpenAI
│       │       ├── gemini-adapter.ts    # Google Gemini
│       │       ├── deepseek-adapter.ts  # DeepSeek
│       │       ├── anthropic-adapter.ts # Anthropic Claude
│       │       ├── zhipu-adapter.ts     # 智谱 AI
│       │       ├── siliconflow-adapter.ts
│       │       ├── dashscope-adapter.ts
│       │       ├── openrouter-adapter.ts
│       │       ├── modelscope-adapter.ts
│       │       ├── ollama-adapter.ts
│       │       └── registry.ts   # 适配器注册表
│       │
│       ├── model/                # 模型配置管理 ⭐⭐
│       │   ├── manager.ts       # 模型管理器
│       │   ├── types.ts         # 类型定义
│       │   ├── defaults.ts      # 默认配置
│       │   ├── validation.ts    # 验证逻辑
│       │   ├── electron-proxy.ts # Electron 代理
│       │   └── parameter-*.ts   # 参数处理工具
│       │
│       ├── prompt/               # 提示词优化 ⭐⭐⭐
│       │   ├── service.ts       # 提示词优化服务
│       │   ├── types.ts         # 类型定义
│       │   ├── factory.ts       # 工厂函数
│       │   └── electron-proxy.ts
│       │
│       ├── template/             # 模板管理
│       │   ├── csp-safe-processor.ts # CSP 安全处理
│       │   └── default-templates/    # 默认模板
│       │       ├── evaluation/       # 评估模板
│       │       ├── optimization/     # 优化模板
│       │       └── test/            # 测试模板
│       │
│       ├── storage/              # 存储服务 ⭐⭐
│       │   ├── factory.ts        # 存储工厂
│       │   ├── adapter.ts        # 适配器接口
│       │   ├── localStorageProvider.ts   # 浏览器存储
│       │   ├── fileStorageProvider.ts   # 文件系统存储
│       │   ├── memoryStorageProvider.ts  # 内存存储
│       │   └── dexieStorageProvider.ts  # IndexedDB 存储
│       │
│       ├── history/              # 历史记录
│       │   ├── manager.ts       # 历史管理
│       │   └── electron-proxy.ts
│       │
│       ├── preference/           # 用户偏好设置
│       │   ├── service.ts       # 偏好服务
│       │   └── electron-proxy.ts
│       │
│       ├── image/                # 图像生成 ⭐
│       │   ├── service.ts       # 图像服务
│       │   ├── types.ts
│       │   ├── electron-proxy.ts
│       │   └── adapters/        # 图像模型适配器
│       │       ├── gemini.ts
│       │       ├── openai.ts
│       │       ├── seedream.ts
│       │       └── ...
│       │
│       ├── evaluation/           # 提示词评估
│       │   ├── service.ts       # 评估服务
│       │   └── types.ts
│       │
│       ├── compare/              # 对比功能
│       │   └── service.ts
│       │
│       ├── favorite/             # 收藏功能
│       │   ├── manager.ts
│       │   └── types.ts
│       │
│       ├── context/              # 上下文管理
│       │   └── repo.ts
│       │
│       └── data/                # 数据管理
│           └── manager.ts
│
├── tests/                       # 测试文件
│   ├── unit/                    # 单元测试
│   ├── integration/             # 集成测试
│   └── mocks/                   # Mock 数据
│
└── dist/                        # 构建输出
```

---

### packages/ui UI 组件包

**目录结构：**

```
packages/ui/
├── src/
│   ├── index.ts                 # 包入口 ⭐⭐⭐
│   ├── components/              # Vue 组件 ⭐⭐⭐
│   │   ├── app-layout/         # 应用布局
│   │   │   ├── PromptOptimizerApp.vue  # 根组件（核心）
│   │   │   ├── AppHeaderActions.vue    # 头部操作
│   │   │   └── AppCoreNav.vue           # 核心导航
│   │   │
│   │   ├── basic-mode/         # 基础模式
│   │   │   ├── BasicUserWorkspace.vue
│   │   │   └── BasicSystemWorkspace.vue
│   │   │
│   │   ├── context-mode/       # 上下文/专业模式 ⭐⭐⭐
│   │   │   ├── ContextEditor.vue
│   │   │   ├── ContextUserWorkspace.vue
│   │   │   ├── ContextSystemWorkspace.vue
│   │   │   ├── ConversationManager.vue
│   │   │   └── ConversationTestPanel.vue
│   │   │
│   │   ├── image-mode/         # 图像模式
│   │   │   ├── ImageText2ImageWorkspace.vue
│   │   │   └── ImageImage2ImageWorkspace.vue
│   │   │
│   │   ├── evaluation/        # 评估相关 ⭐⭐
│   │   │   ├── EvaluationPanel.vue
│   │   │   ├── EvaluationScoreBadge.vue
│   │   │   └── InlineDiff.vue
│   │   │
│   │   ├── variable/           # 变量管理 ⭐⭐⭐
│   │   │   ├── VariableManagerModal.vue
│   │   │   ├── VariableEditor.vue
│   │   │   └── VariableImporter.vue
│   │   │
│   │   ├── model/              # 模型管理 UI
│   │   │   ├── ModelManager.vue
│   │   │   ├── TextModelManager.vue
│   │   │   └── ImageModelManager.vue
│   │   │
│   │   ├── TemplateManager.vue  # 模板管理
│   │   ├── HistoryDrawer.vue   # 历史抽屉
│   │   ├── FavoriteManager.vue # 收藏管理
│   │   ├── OutputDisplay.vue   # 输出展示
│   │   ├── InputPanel.vue      # 输入面板
│   │   └── ...
│   │
│   ├── composables/            # 组合式函数 ⭐⭐⭐
│   │   ├── app/                # 应用级
│   │   ├── prompt/             # 提示词相关 ⭐⭐⭐
│   │   ├── model/              # 模型相关
│   │   ├── context/            # 上下文相关
│   │   ├── variable/           # 变量相关 ⭐⭐⭐
│   │   ├── storage/            # 存储相关
│   │   ├── ui/                 # UI 交互
│   │   ├── mode/               # 模式切换
│   │   ├── image/              # 图像生成
│   │   ├── performance/        # 性能优化
│   │   ├── accessibility/      # 无障碍
│   │   └── workspaces/         # 工作区
│   │
│   ├── router/                 # Vue Router 配置 ⭐
│   │   ├── index.ts           # 路由定义
│   │   ├── RootBootstrapRoute.ts
│   │   └── guards.ts          # 路由守卫
│   │
│   ├── plugins/                # Vue 插件
│   │   ├── i18n/              # 国际化插件
│   │   └── pinia/             # 状态管理插件
│   │
│   ├── i18n/                   # 国际化资源
│   │   ├── en.json            # 英文
│   │   └── zh.json            # 中文
│   │
│   ├── styles/                 # 样式文件
│   │   ├── index.css
│   │   ├── scrollbar.css
│   │   └── common.css
│   │
│   ├── config/                 # 配置
│   │   └── naive-theme.ts     # Naive UI 主题配置
│   │
│   ├── utils/                  # 工具函数
│   │   └── data-transformer.ts
│   │
│   ├── types/                  # 类型定义
│   │   └── select-options.ts
│   │
│   └── services/              # 服务层
│
└── tests/                      # 测试
    ├── unit/
    └── e2e/
```

---

## packages/ui 包详解

### 1. 包概述

`packages/ui` 是 **Prompt Optimizer 项目的核心 UI 组件库**，承担了几乎所有的业务逻辑、状态管理和用户界面实现。

**核心职责**：
- 提供完整的 Vue 3 组件库
- 实现所有业务逻辑（通过 Composables）
- 管理状态（Pinia + Composables 模式）
- 提供国际化、主题系统
- 定义 Vue Router 路由

**重要特点**：
- **复用设计**：web、desktop、extension 共用同一个 UI 层
- **Composables 驱动**：使用 Vue 3 Composition API 封装业务逻辑
- **Naive UI 优先**：优先使用 Naive UI 组件库
- **TypeScript 全面支持**：完整的类型定义

---

### 2. 核心文件详解

#### 2.1 package.json

```json
{
  "name": "@prompt-optimizer/ui",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "style": "./dist/style.css",
  "exports": {
    ".": { "import": "./dist/index.js", "require": "./dist/index.cjs" },
    "./style.css": "./dist/style.css"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run",
    "lint": "eslint src --ext .ts,.vue"
  },
  "dependencies": {
    "@prompt-optimizer/core": "workspace:*",  // 依赖核心包
    "naive-ui": "^2.42.0",                     // UI 组件库
    "pinia": "^3.0.3",                         // 状态管理
    "vue-router": "4",                         // 路由
    "vue": "^3.3.4",                           // Vue 3
    "codemirror": "^6.0.2",                    // 代码编辑器
    "markdown-it": "^14.1.0",                   // Markdown 解析
    "highlight.js": "^11.11.1",                // 代码高亮
    "dompurify": "^3.2.4",                     // HTML 净化
    "@vicons/tabler": "^0.13.0",               // 图标库
    "uuid": "^11.0.5"                          // UUID 生成
  }
}
```

**关键点**：
- 输出多种格式：CJS、ESM、类型定义、CSS
- 依赖 `@prompt-optimizer/core` 获取核心服务
- 使用 Naive UI 作为主要组件库

---

#### 2.2 index.ts（包入口）

```typescript
// packages/ui/src/index.ts

// 样式导入
import "./styles/index.css";
import "./styles/scrollbar.css";
import "./styles/common.css";

// 1. 插件导出
export {
  installI18n,
  installI18nOnly,
  initializeI18nWithStorage,
  setI18nServices,
  i18n,
} from "./plugins/i18n";

export { pinia, installPinia, setPiniaServices } from "./plugins/pinia";

// 2. 主题配置导出
export {
  currentNaiveTheme as naiveTheme,
  currentThemeOverrides as themeOverrides,
  switchTheme,
  initializeNaiveTheme,
} from "./config/naive-theme";

// 3. 组件导出（带 UI 后缀）
export { default as ToastUI } from "./components/Toast.vue";
export { default as ModelManagerUI } from "./components/ModelManager.vue";
export { default as PromptPanelUI } from "./components/PromptPanel.vue";
// ... 更多组件

// 4. 应用布局组件
export { AppHeaderActions, AppCoreNav, PromptOptimizerApp } from "./components/app-layout";

// 5. Router 导出
export { router } from "./router";

// 6. 评估组件
export { EvaluationPanel, EvaluateButton, EvaluationScoreBadge } from "./components/evaluation";

// 7. Naive UI 组件再导出
export { NButton, NInput, NModal, NSelect, ... } from "naive-ui";

// 8. Composables 导出
export * from "./composables";

// 9. Core 服务转发
export {
  StorageFactory,
  ModelManager,
  TemplateManager,
  HistoryManager,
  createLLMService,
  createPromptService,
  // ...
} from "@prompt-optimizer/core";

// 10. 类型导出
export type { OptimizationMode, ConversationMessage, IModelManager, ... } from "@prompt-optimizer/core";
```

**设计说明**：
- **UI 后缀**：所有组件导出时添加 `UI` 后缀（如 `ToastUI`），避免与其他库冲突
- **Core 转发**：直接转发 core 包的服务和类型，便于使用
- **插件集成**：i18n、Pinia、Router 作为插件导出

---

### 3. 组件架构

#### 3.1 组件分类

```
components/
├── app-layout/                 # 应用布局 ⭐⭐⭐
│   ├── PromptOptimizerApp.vue  # 根组件，所有逻辑的集合
│   ├── AppHeaderActions.vue    # 顶部操作栏
│   └── AppCoreNav.vue          # 核心导航
│
├── basic-mode/                 # 基础模式
│   ├── BasicSystemWorkspace.vue
│   └── BasicUserWorkspace.vue
│
├── context-mode/               # 上下文/专业模式 ⭐⭐⭐
│   ├── ContextEditor.vue       # 上下文编辑器
│   ├── ContextSystemWorkspace.vue  # 系统提示词工作区
│   ├── ContextUserWorkspace.vue    # 用户提示词工作区
│   ├── ConversationManager.vue     # 对话管理
│   └── ConversationTestPanel.vue   # 对话测试面板
│
├── image-mode/                 # 图像模式
│   ├── ImageText2ImageWorkspace.vue
│   └── ImageImage2ImageWorkspace.vue
│
├── evaluation/                # 评估功能 ⭐⭐
│   ├── EvaluationPanel.vue
│   ├── EvaluationScoreBadge.vue
│   └── InlineDiff.vue
│
├── variable/                  # 变量管理 ⭐⭐⭐
│   ├── VariableManagerModal.vue
│   ├── VariableEditor.vue
│   └── VariableImporter.vue
│
├── model/                      # 模型管理
│   ├── ModelManager.vue
│   ├── TextModelManager.vue
│   └── ImageModelManager.vue
│
└── 其他通用组件...
```

#### 3.2 PromptOptimizerApp.vue（核心组件）

这是 **最核心的组件**，整合了所有业务逻辑：

```vue
<template>
  <NConfigProvider :theme="naiveTheme" :theme-overrides="themeOverrides">
    <!-- 加载状态 -->
    <div v-if="isInitializing" class="loading-container">
      <div class="spinner"></div>
      <p>{{ t("log.info.initializing") }}</p>
    </div>

    <!-- 渲染主布局 -->
    <template v-else>
      <MainLayoutUI>
        <!-- 核心导航 -->
        <template #core-nav>
          <AppCoreNav />
        </template>

        <!-- 头部操作 -->
        <template #actions>
          <AppHeaderActions
            @open-templates="openTemplateManager"
            @open-history="historyManager.showHistory = true"
            @open-model-manager="modelManager.showConfig = true"
          />
        </template>

        <!-- 路由出口 -->
        <router-view />
      </MainLayoutUI>
    </template>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { NConfigProvider } from 'naive-ui'
import { useNaiveTheme } from '@/composables/ui/useNaiveTheme'
import { useAppInitializer } from '@/composables/system/useAppInitializer'
// ... 更多 composables

const { t } = useI18n()
const { naiveTheme, themeOverrides } = useNaiveTheme()

// 初始化服务
const { isInitializing, services, isReady, initialize } = useAppInitializer()

onMounted(() => {
  initialize()
})
</script>
```

**职责**：
- 提供 Naive UI 主题配置
- 管理应用初始化流程
- 渲染主布局和路由
- 整合所有状态管理

---

### 4. Composables 架构

#### 4.1 Composables 分类

| 分类 | 路径 | 说明 | 重要程度 |
|------|------|------|----------|
| **prompt** | composables/prompt/ | 提示词优化、测试逻辑 | ⭐⭐⭐ |
| **variable** | composables/variable/ | 变量管理 | ⭐⭐⭐ |
| **model** | composables/model/ | 模型选择、配置 | ⭐⭐⭐ |
| **context** | composables/context/ | 上下文管理 | ⭐⭐ |
| **mode** | composables/mode/ | 模式切换 | ⭐⭐ |
| **storage** | composables/storage/ | 存储、历史、收藏 | ⭐⭐ |
| **ui** | composables/ui/ | UI 交互（Toast、模态框等） | ⭐ |
| **system** | composables/system/ | 应用初始化 | ⭐⭐ |
| **image** | composables/image/ | 图像生成 | ⭐⭐ |
| **performance** | composables/performance/ | 性能优化 | ⭐ |
| **accessibility** | composables/accessibility/ | 无障碍支持 | ⭐ |

#### 4.2 核心 Composables 详解

**提示词相关（composables/prompt/）**：

| Composable | 说明 |
|------------|------|
| `usePromptOptimizer` | 提示词优化核心逻辑 |
| `usePromptTester` | 提示词测试逻辑 |
| `useTemplateManager` | 模板管理 |
| `useEvaluation` | 评估功能 |
| `useVariableExtraction` | 变量提取 |
| `usePromptHistory` | 历史记录 |

**变量相关（composables/variable/）**：

| Composable | 说明 |
|------------|------|
| `useVariableManager` | 变量 CRUD 操作 |
| `useTemporaryVariables` | 临时变量管理 |
| `useAggregatedVariables` | 聚合变量 |
| `useSmartVariableValueGeneration` | 智能变量值生成 |

**模型相关（composables/model/）**：

| Composable | 说明 |
|------------|------|
| `useModelManager` | 模型管理器 |
| `useTextModelManager` | 文本模型管理 |
| `useImageModelManager` | 图像模型管理 |
| `useConnectionConfig` | 连接配置 |

#### 4.3 Composables 使用示例

```typescript
// 示例：使用 usePromptOptimizer
import { usePromptOptimizer } from '@/composables/prompt/usePromptOptimizer'

const {
  originalPrompt,
  optimizedPrompt,
  isOptimizing,
  error,
  optimize
} = usePromptOptimizer()

// 调用优化
await optimize({
  prompt: originalPrompt.value,
  mode: 'basic'
})
```

---

### 5. 路由系统

#### 5.1 路由配置

```typescript
// packages/ui/src/router/index.ts

const routes: RouteRecordRaw[] = [
  // 根路径
  { path: '/', name: 'root', component: RootBootstrapRoute },

  // Basic 模式
  { path: '/basic/system', component: () => import('.../BasicSystemWorkspace.vue') },
  { path: '/basic/user', component: () => import('.../BasicUserWorkspace.vue') },

  // Pro 模式
  { path: '/pro/multi', component: () => import('.../ContextSystemWorkspace.vue') },
  { path: '/pro/variable', component: () => import('.../ContextUserWorkspace.vue') },

  // Image 模式
  { path: '/image/text2image', component: () => import('.../ImageText2ImageWorkspace.vue') },
  { path: '/image/image2image', component: () => import('.../ImageImage2ImageWorkspace.vue') }
]

export const router = createRouter({
  history: createWebHashHistory(),  // Hash 模式，Electron 兼容
  routes
})
```

#### 5.2 路由特点

| 特性 | 说明 |
|------|------|
| **Hash 模式** | 使用 `#/basic/system` 格式，兼容 Electron |
| **懒加载** | 组件使用 `() => import()` 动态导入 |
| **路由守卫** | `beforeRouteSwitch` 监控导航事件 |

#### 5.3 路由与模式对应

| 路由 | 模式 | 组件 |
|------|------|------|
| `/basic/system` | 基础模式 | BasicSystemWorkspace |
| `/basic/user` | 基础模式 | BasicUserWorkspace |
| `/pro/multi` | 专业模式 | ContextSystemWorkspace |
| `/pro/variable` | 专业模式 | ContextUserWorkspace |
| `/image/text2image` | 图像模式 | ImageText2ImageWorkspace |
| `/image/image2image` | 图像模式 | ImageImage2ImageWorkspace |

---

### 6. 插件系统

#### 6.1 i18n 插件

```typescript
// packages/ui/src/plugins/i18n/index.ts

export function installI18nOnly(app: App) {
  // 仅安装 i18n，不初始化语言
  app.use(i18n)
}

export function initializeI18nWithStorage() {
  // 从存储恢复语言设置
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    i18n.global.locale.value = savedLocale
  }
}
```

#### 6.2 Pinia 插件

```typescript
// packages/ui/src/plugins/pinia/index.ts

export const pinia = createPinia()

export function installPinia(app: App) {
  app.use(pinia)
}
```

---

### 7. 主题系统

#### 7.1 Naive UI 主题配置

```typescript
// packages/ui/src/config/naive-theme.ts

import { computed } from 'vue'
import { darkTheme, lightTheme } from 'naive-ui'

// 当前主题
export const currentNaiveTheme = computed(() => {
  return isDark.value ? darkTheme : lightTheme
})

// 主题覆盖配置
export const currentThemeOverrides = computed(() => {
  // 自定义主题 tokens
})

// 切换主题
export function switchTheme(isDark: boolean) {
  // 切换逻辑
}
```

---

### 8. 状态管理模式

#### 8.1 设计理念

项目使用 **Pinia + Composables** 的混合模式：

```
┌─────────────────────────────────────────────────────┐
│                    Vue 组件                          │
│                  (展示逻辑)                           │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│               Composables (业务逻辑)                 │
│              usePromptOptimizer                      │
│              useModelManager                         │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                  Pinia Stores                        │
│              (共享状态存储)                           │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│              @prompt-optimizer/core                  │
│              (核心服务层)                             │
└─────────────────────────────────────────────────────┘
```

#### 8.2 为什么不用 Pinia 存储所有状态？

- **Composables 更灵活**：使用 Vue 3 的 `ref`、`computed` 更直观
- **关注点分离**：业务逻辑在 Composables，状态在 Store
- **复用性**：Composables 可以在不同组件间复用

---

### 9. 与其他包的关系

```
packages/core (核心业务逻辑)
        │
        │ 依赖
        ▼
packages/ui (Vue 组件库)
        │
        │ 依赖（提供入口）
        ▼
packages/web (应用壳)
packages/desktop (桌面应用壳)
packages/extension (扩展壳)
```

**依赖链**：
- `web → ui → core`
- `core` 提供核心服务（LLM、存储、模型等）
- `ui` 封装为 Vue 组件和 Composables
- `web/desktop/extension` 仅作为应用入口

---

### 10. 组件命名规范

#### 10.1 导出命名

```typescript
// 导出时添加 UI 后缀，避免命名冲突
export { default as ToastUI } from "./components/Toast.vue"
export { default as ModelManagerUI } from "./components/ModelManager.vue"
export { default as InputPanelUI } from "./components/InputPanel.vue"
```

#### 10.2 组件内部

```vue
<!-- 组件名使用 PascalCase -->
<template>
  <div class="prompt-panel">
    <NInput v-model:value="prompt" />
  </div>
</template>
```

---

### 11. 常见操作

#### 11.1 构建 UI 包

```bash
pnpm build:ui
# 或
pnpm -F @prompt-optimizer/ui build
```

#### 11.2 开发模式（Watch）

```bash
pnpm -F @prompt-optimizer/ui dev
# 会监听文件变化并重新构建
```

#### 11.3 添加新组件

1. 在 `components/` 下创建 `.vue` 文件
2. 在 `index.ts` 中导出（添加 UI 后缀）
3. 使用 Naive UI 组件优先

#### 11.4 添加新 Composable

1. 在 `composables/` 下创建目录
2. 编写 `useXxx.ts` 文件
3. 在 `composables/index.ts` 中导出

---

### 12. 学习路径建议

#### 阶段一：理解入口

1. `index.ts` - 了解导出结构
2. `PromptOptimizerApp.vue` - 理解整体架构
3. `router/index.ts` - 理解路由结构

#### 阶段二：理解核心功能

1. **Composables** - 业务逻辑的核心
   - `usePromptOptimizer` - 提示词优化
   - `useModelManager` - 模型管理
   - `useVariableManager` - 变量管理

2. **组件** - 界面的实现
   - `BasicSystemWorkspace` - 基础模式
   - `ContextUserWorkspace` - 专业模式
   - `EvaluationPanel` - 评估功能

#### 阶段三：深入细节

1. 主题系统 (`config/naive-theme.ts`)
2. 插件系统 (`plugins/`)
3. 国际化 (`i18n/`)

---

### 13. 核心要点总结

| 要点 | 说明 |
|------|------|
| **复用** | web、desktop、extension 共用 ui 包 |
| **Composables** | 业务逻辑的主要封装方式 |
| **Naive UI** | 优先使用的组件库 |
| **TypeScript** | 完整的类型支持 |
| **Hash Router** | 兼容 Electron 的路由方案 |
| **懒加载** | 路由组件使用动态导入 |

---

### 14. 下一步学习建议

学习完 `packages/ui` 后，建议深入：

1. **`packages/core`** - 学习核心业务逻辑
   - LLM 服务
   - 模型管理
   - 存储服务
   - 提示词处理

2. **具体功能模块**：
   - 变量系统（高级功能）
   - 评估系统
   - 图像生成

### packages/web Web 应用

```
packages/web/
├── src/
│   ├── main.ts                 # Vue 应用入口 ⭐
│   └── App.vue                 # 根组件（轻量壳）
├── public/                     # 静态资源
│   ├── config.js              # 运行时配置
│   └── favicon.ico            # 网站图标
├── vite.config.ts              # Vite 构建配置
├── index.html                  # HTML 入口
├── tailwind.config.js          # Tailwind CSS 配置
├── postcss.config.js           # PostCSS 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 包配置
```

---

## packages/web 包详解

### 1. 包概述

`packages/web` 是 **Prompt Optimizer 项目的 Web 应用入口包**，但它实际上是一个**非常轻量的应用壳**。

**核心职责**：
- 作为 Web 应用的入口点
- 配置 Vue 应用、Vue Router、Pinia 状态管理、i18n 国际化
- 渲染 `PromptOptimizerApp` 主组件（来自 `@prompt-optimizer/ui`）

**重要特点**：
- **极简代码**：所有业务逻辑、状态管理、事件处理都在 `@prompt-optimizer/ui` 包中实现
- **应用壳**：`App.vue` 仅作为壳子，减少代码重复
- **依赖 UI 包**：通过依赖 `@prompt-optimizer/ui` 来获取完整功能

---

### 2. 目录结构详解

```
packages/web/
├── src/
│   ├── main.ts                 # ⭐ 核心入口文件
│   │                           # - 创建 Vue 应用实例
│   │                           # - 安装 i18n、Pinia、Router 插件
│   │                           # - 同步文档标题和语言属性
│   │                           # - 挂载到 #app
│   │
│   └── App.vue                 # ⭐ 根组件（轻量壳）
│                               # - 仅渲染 PromptOptimizerApp
│                               # - 所有逻辑在 ui 包中
│
├── public/
│   ├── config.js               # ⭐ 运行时配置
│   │                           # - 必须在应用代码之前加载
│   │                           # - 用于动态配置 API 地址等
│   │
│   └── favicon.ico            # 网站图标
│
├── index.html                  # HTML 入口
│                               # - 加载顺序：config.js → main.ts
│                               # - #app 作为 Vue 挂载点
│
├── vite.config.ts              # Vite 配置
│                               # - 端口：18181
│                               # - Monorepo 环境变量共享
│                               # - 跨包监视（ui 变化自动重载）
│
├── tailwind.config.js          # Tailwind CSS 配置
├── postcss.config.js           # PostCSS 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 依赖配置
```

---

### 3. 核心文件详解

#### 3.1 package.json

```json
{
  "name": "@prompt-optimizer/web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --force",         // 启动开发服务器（强制重新预构建）
    "build": "vite build",          // 生产构建
    "preview": "vite preview",      // 预览生产构建
    "test": "vitest"               // 单元测试
  },
  "dependencies": {
    "@prompt-optimizer/ui": "workspace:*",  // 依赖 UI 包
    "uuid": "^11.0.5",                      // UUID 生成
    "vue": "^3.5.13"                        // Vue 3
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.2",         // Vue 插件
    "vite": "^7.2.7",                       // Vite 7
    "vitest": "^4.0.15",                    // 测试框架
    "tailwindcss": "^3.4.17",               // CSS 框架
    // ... 其他工具依赖
  }
}
```

**关键点**：
- `dependencies` 只有 3 个：ui、uuid、vue
- 实际业务逻辑全部在 `@prompt-optimizer/ui` 中
- 使用 `workspace:*` 依赖本地包

---

#### 3.2 index.html

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- ⭐ 运行时配置，必须在应用代码之前加载 -->
    <script src="/config.js"></script>
    <title>提示词优化器</title>
  </head>
  <body>
    <!-- ⭐ Vue 挂载点 -->
    <div id="app"></div>
    <!-- ⭐ 模块入口 -->
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

**加载顺序**：
1. `config.js` - 运行时配置
2. `main.ts` - Vue 应用入口
3. 创建 Vue 实例并挂载到 `#app`

---

#### 3.3 main.ts（核心入口）

```typescript
/*
 * Prompt Optimizer - AI提示词优化工具
 * Web 应用入口文件
 */

import { createApp, watch } from 'vue'
import { installI18nOnly, installPinia, i18n, router } from '@prompt-optimizer/ui'
import '@prompt-optimizer/ui/dist/style.css'
import App from './App.vue'

// 1. 创建 Vue 应用实例
const app = createApp(App)

// 2. 安装 i18n 插件（语言初始化在 App.vue 中进行）
installI18nOnly(app)

// 3. 安装 Pinia 状态管理
installPinia(app)

// 4. 安装 Vue Router
app.use(router)

// 5. 同步文档标题和语言属性
if (typeof document !== 'undefined') {
  const syncDocumentTitle = () => {
    document.title = i18n.global.t('common.appName')
    const currentLocale = String(i18n.global.locale.value || '')
    const htmlLang = currentLocale.startsWith('zh') ? 'zh' : 'en'
    document.documentElement.setAttribute('lang', htmlLang)
  }

  syncDocumentTitle()
  // 监听语言变化，自动同步
  // watch 函数：Vue 3 中的响应式监听函数，用于监听数据变化并执行回调
  // i18n.global.locale：国际化插件的全局语言设置，存储当前应用使用的语言代码
  // syncDocumentTitle：当语言变化时执行的回调函数，更新文档标题和HTML lang属性
  watch(i18n.global.locale, syncDocumentTitle)
}

// 6. 等待 router 完成首次解析，避免短暂 "/" 状态误重定向
// router.isReady()：Vue Router 提供的方法，返回Promise，当路由系统完成首次解析后resolve
// 路由就绪的含义：路由系统已完成初始导航解析、所有路由守卫执行完毕、异步组件加载完成、路由参数解析完成
// 使用场景：确保路由系统完全初始化后再挂载应用，避免路由状态问题和误重定向
// void 操作符：丢弃Promise返回值，避免未处理的Promise警告
void router.isReady().then(() => {
  app.mount('#app')
})

// 7. Vercel 环境变量加载 Analytics
if (import.meta.env.VITE_VERCEL_DEPLOYMENT === 'true') {
  const loadAnalytics = () => {
    const script = document.createElement('script')
    script.src = '/_vercel/insights/script.js'
    script.defer = true
    document.head.appendChild(script)
  }
  window.addEventListener('DOMContentLoaded', loadAnalytics)
}
```

**关键步骤**：

| 步骤 | 操作 | 说明 |
|------|------|------|
| 1 | `createApp(App)` | 创建 Vue 应用实例 |
| 2 | `installI18nOnly(app)` | 安装国际化插件 |
| 3 | `installPinia(app)` | 安装 Pinia 状态管理 |
| 4 | `app.use(router)` | 安装 Vue Router |
| 5 | 同步文档标题 | 响应式更新页面标题和 lang 属性 |
| 6 | `router.isReady()` | 等待路由解析完成后再挂载 |
| 7 | `app.mount('#app')` | 挂载到 DOM |

**为什么先安装 i18n 再初始化语言？**

注释说明：`installI18nOnly` 只安装 i18n 插件，**语言初始化将在 App.vue 中服务准备好后进行**。这样做是为了确保在服务初始化完成后再初始化语言，避免时序问题。

---

#### 3.4 App.vue（应用壳）

```vue
<template>
    <!--
        Web App 入口组件

        职责:
        - 作为 web 应用的入口点
        - 渲染 PromptOptimizerApp 主组件

        说明:
        - 所有核心逻辑已迁移至 @prompt-optimizer/ui 的 PromptOptimizerApp
        - 此文件仅作为应用壳，减少代码重复
    -->
    <PromptOptimizerApp />
</template>

<script setup lang="ts">
/**
 * Web App 入口组件
 *
 * @description
 * 轻量级入口组件，渲染 PromptOptimizerApp 主应用。
 * 所有业务逻辑、状态管理和事件处理均在 PromptOptimizerApp 中实现。
 */
import { PromptOptimizerApp } from "@prompt-optimizer/ui";
</script>
```

**设计理念**：
- **极简壳子**：`App.vue` 只做一件事 —— 渲染 `PromptOptimizerApp`
- **代码复用**：web、desktop、extension 都可以复用同一个主应用
- **关注点分离**：web 包负责应用入口，ui 包负责业务实现

---

#### 3.5 vite.config.ts

```typescript
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // ⭐ Monorepo 环境：在 monorepo 中，脚本可能从不同的 cwd 启动
  // 不依赖 process.cwd()，而是用配置文件所在位置推导出 monorepo root
  const monorepoRoot = resolve(__dirname, '../..')
  const env = loadEnv(mode, monorepoRoot)

  return {
    // ⭐ 环境变量目录：指向 monorepo 根目录
    envDir: monorepoRoot,

    // 插件
    plugins: [vue()],

    // 开发服务器
    server: {
      port: 18181,          // 固定端口
      host: true,           // 监听所有网卡（0.0.0.0）
      hmr: true,            // 开启热更新
      fs: {
        // 允许为工作区依赖提供服务
        allow: ['..']
      },
      watch: {
        // ⭐ 确保监视 monorepo 中其他包的变化
        // 当 ui 包变化时，web 自动重载
        ignored: ['!**/node_modules/@prompt-optimizer/**']
      }
    },

    // 构建配置
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        }
      }
    },

    // 静态资源目录
    publicDir: 'public',

    // 路径别名
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': resolve(__dirname, 'src'),
        '@prompt-optimizer/core': path.resolve(__dirname, '../core'),
        '@prompt-optimizer/ui': path.resolve(__dirname, '../ui'),
        '@prompt-optimizer/web': resolve(__dirname, '../web'),
        '@prompt-optimizer/extension': resolve(__dirname, '../extension')
      }
    },

    // 预构建依赖
    optimizeDeps: {
      include: ['element-plus'],
    },

    // 环境变量注入
    define: {
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        ...Object.keys(env).reduce((acc, key) => {
          acc[key] = env[key];
          return acc;
        }, {})
      }
    }
  }
})
```

**核心配置亮点**：

| 配置 | 说明 |
|------|------|
| `envDir: monorepoRoot` | 从 monorepo 根目录读取 `.env` 文件 |
| `server.port: 18181` | 固定端口，方便记忆和访问 |
| `server.host: true` | 允许局域网访问 |
| `server.fs.allow: ['..']` | 允许访问 monorepo 父目录 |
| `watch.ignored` | 监视 ui 包变化，自动重载 |
| `resolve.alias` | 路径别名，方便跨包引用 |
| `optimizeDeps.include` | 预构建 element-plus |

---

### 4. 运行时配置 (config.js)

`public/config.js` 是运行时配置文件，在应用代码之前加载：

```javascript
// public/config.js 示例
// 用于动态配置 API 地址等运行时参数
window.__RUNTIME_CONFIG__ = {
  // API 配置
  // API_BASE_URL: 'https://api.example.com',
};
```

**设计目的**：
- 在不重新构建的情况下修改配置
- 适合多环境部署（开发、测试、生产）
- 常用场景：修改 API 地址、开关功能等

---

### 5. 启动流程

```
pnpm dev
    │
    ▼
packages/web/package.json → scripts.dev = "vite --force"
    │
    ▼
vite.config.ts → 读取配置
    │
    ▼
index.html → 加载 config.js → 加载 main.ts
    │
    ▼
main.ts → createApp(App)
    │
    ▼
installI18nOnly() → installPinia() → app.use(router)
    │
    ▼
router.isReady() → app.mount('#app')
    │
    ▼
App.vue → <PromptOptimizerApp />
    │
    ▼
显示完整应用界面
```

---

### 6. 与其他包的关系

```
packages/core (核心业务逻辑)
        │
        ▼
packages/ui (Vue 组件库)
        │
        ▼
packages/web (应用入口)  ←── 依赖 ui，仅作为壳子
packages/desktop (桌面应用壳)
packages/extension (扩展壳)
```

**依赖链**：
- `web → ui → core`
- 业务逻辑在 `core` 和 `ui` 中
- `web` 只是启动入口

---

### 7. 常见操作

#### 7.1 启动开发服务器

```bash
# 在项目根目录执行
pnpm dev
# 或指定包执行
pnpm -F @prompt-optimizer/web dev

# 访问地址：http://localhost:18181
```

#### 7.2 构建生产版本

```bash
pnpm build:web
# 或
pnpm -F @prompt-optimizer/web build

# 输出到 packages/web/dist/
```

#### 7.3 添加新的依赖

```bash
# 在 web 包中添加依赖
pnpm -F @prompt-optimizer/web add <package-name>
```

---

### 8. 学习要点总结

1. **职责清晰**：`packages/web` 是应用入口，不是业务逻辑所在
2. **代码极简**：只有 `main.ts` 和 `App.vue` 两个源文件
3. **复用设计**：web、desktop、extension 复用同一个 `PromptOptimizerApp`
4. **Vite 配置**：重点学习 monorepo 环境变量共享和跨包监视
5. **插件安装顺序**：i18n → Pinia → Router → mount

---

### 9. 下一步学习建议

学习完 `packages/web` 后，建议按以下顺序深入：

1. **`packages/ui`** - 学习 Vue 组件和 composable
   - 重点：`PromptOptimizerApp.vue` 完整实现
   - 状态管理：composables 模式

2. **`packages/core`** - 学习核心业务逻辑
   - 服务层：LLM、模型、提示词、存储等

3. **`packages/desktop`** - 学习 Electron 桌面应用
   - 主进程、预加载、IPC 通信

---

#### 子包依赖关系与 `workspace:*`

- **分层关系**：
  - `@prompt-optimizer/core`：核心业务逻辑库（纯 TS lib）
  - `@prompt-optimizer/ui`：UI 组件库，内部依赖 core 并封装成组件/composable
  - `@prompt-optimizer/web`：真正的 Web 应用，主要依赖 ui
- **为什么 web 不直接依赖 core？**
  - 典型链路是：`web → ui → core`，web 通过 ui 暴露的组件和 composable 使用核心能力，减少直接耦合。
  - 只有当 web 代码里出现 `import xxx from '@prompt-optimizer/core'` 时，才需要在 `packages/web/package.json` 里显式声明对 core 的依赖。
- **`workspace:*` 的含义**（示例：`"@prompt-optimizer/ui": "workspace:*"`）：
  - 告诉 pnpm：依赖的是**当前 workspace 中的本地包**，而不是 npm registry 上的远程版本。
  - `*` 表示接受本地包的任意版本，发布/对齐版本时由根脚本统一管理。
  - 还有 `workspace:^`、`workspace:~`、`workspace:1.2.3` 等写法，用来增加版本约束，但本项目中用 `workspace:*` 即可满足内部开发需求。

---

### packages/desktop 桌面应用 (Electron)

```
packages/desktop/
├── main.js                     # Electron 主进程 ⭐⭐
├── preload.js                  # 预加载脚本 ⭐⭐
├── config/                     # 配置文件
├── icons/                      # 应用图标
├── README.md
└── package.json
```

**核心文件说明：**

| 文件 | 说明 |
|------|------|
| `main.js` | Electron 主进程，负责创建窗口、IPC 处理、自动更新 |
| `preload.js` | 预加载脚本，暴露安全的 API 给渲染进程 |

---

### packages/extension Chrome 扩展

```
packages/extension/
├── src/
│   ├── main.ts                 # 入口
│   ├── App.vue                 # 根组件
│   └── style.css               # 样式
├── public/
│   ├── icons/                  # 扩展图标
│   └── _locales/              # 国际化
└── manifest.json              # 扩展配置
```

---

### packages/mcp-server MCP 服务器

```
packages/mcp-server/
├── src/
│   ├── config/                 # 配置
│   ├── adapters/              # 协议适配器
│   ├── utils/                 # 工具
│   └── main.ts                # 入口
└── package.json
```

---

### TypeScript 相关配置文件

本项目的 TypeScript 配置分布在多个位置，以下是核心文件说明：

#### 1. `packages/ui/tsconfig.json`

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

| 配置项 | 说明 |
|--------|------|
| `extends` | 继承 Vue 官方的 DOM 类型 TS 配置 |
| `include` | 指定要编译的文件范围 |
| `composite: true` | 启用项目引用，用于 monorepo |
| `paths` | 路径别名 `@/*` 映射到 `./src/*` |

#### 2. `packages/ui/env.d.ts`

类型声明文件，内容如下：

```typescript
/// <reference types="vite/client" />

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// E2E 测试辅助变量
interface Window {
  __TEST_DB_NAME__?: string
}

/// <reference path="./src/types/electron.d.ts" />
```

**三斜线指令详解：**

| 指令 | 作用 |
|------|------|
| `/// <reference types="vite/client" />` | 引入 Vite 提供的客户端类型定义（如 `import.meta.env`） |
| `/// <reference path="..." />` | 引用其他类型声明文件 |

**`declare module '*.vue'`**：让 TypeScript 识别 `.vue` 文件作为模块，导入时获得类型推断。

#### 3. `import.meta.env` - Vite 环境变量

`import.meta.env` 是 **Vite 内置提供的环境变量对象**，由 Vite 在启动时自动注入到客户端代码中。

**内置属性（始终可用）：**

| 属性 | 说明 | 示例值 |
|------|------|--------|
| `MODE` | 当前模式 | `'development'` / `'production'` |
| `DEV` | 是否开发模式 | `true` / `false` |
| `PROD` | 是否生产模式 | `true` / `false` |
| `SSR` | 是否服务端渲染 | `true` / `false` |
| `BASE_URL` | 部署基础路径 | `'/'` |

**自定义属性：**

只有以 `VITE_` 开头的环境变量才会被注入：

```env
# .env.local
VITE_API_KEY=abc123
VITE_API_URL=https://api.example.com
```

```typescript
// 代码中访问
import.meta.env.VITE_API_KEY   // "abc123"
import.meta.env.VITE_API_URL    // "https://api.example.com"
```

**注意**：变量名必须以 `VITE_` 开头，否则不会被注入。

**常见用法示例：**

```typescript
// 条件判断
if (import.meta.env.DEV) {
  console.log('开发模式调试信息')
}

// 动态配置
const apiBase = import.meta.env.VITE_API_BASE_URL || '/api'

// 特性开关
const enableDebug = import.meta.env.VITE_ENABLE_DEBUG === 'true'
```

**与 `.env` 文件的对应关系：**

```
.env                # 默认配置
.env.local          # 本地覆盖（不提交到 Git）
.env.development    # 开发环境专用
.env.production     # 生产环境专用
```

加载优先级（后者覆盖前者）：
`.env` → `.env.local` → `.env.[mode]`

---

### workspace:* 版本协议

pnpm workspace 特有的版本协议：

| 写法 | 含义 | 使用场景 |
|------|------|----------|
| `workspace:*` | 任意版本 | 推荐，用于本地开发 |
| `workspace:^` | 兼容版本 | 允许小版本升级 |
| `workspace:~` | 补丁版本 | 允许补丁升级 |
| `workspace:1.2.3` | 固定版本 | 锁定特定版本 |

示例：
```json
"@prompt-optimizer/ui": "workspace:*"
```

#### pnpm -r 批量操作

`-r` 是 `--recursive` 的缩写，**在所有 workspace 子包中执行命令**：

```bash
# 在所有子包中运行 build
pnpm -r build

# 在所有子包中运行 test
pnpm -r test

# 过滤特定包，只对目标包执行
pnpm -r --filter my-lib build
```

#### 版本管理工具

| 工具 | 功能 |
|------|------|
| **standard-version** | 基于 commit 历史自动生成版本号（本项目使用） |
| **lerna** | 统一管理 monorepo 版本 |
| **changesets** | 独立版本 + 可选统一 |
| **rush** | Microsoft 的 monorepo 工具 |

---

### npm publish 发布配置

#### 自动包含的文件

npm publish **默认自动包含**以下文件，无需配置：

| 文件 | 说明 |
|------|------|
| `package.json` | 必发 |
| `README.md` | 根目录的会发布 |
| `CHANGELOG.md` | 如果存在 |
| `LICENSE` | 许可证文件 |

#### 需要手动指定的文件

通过 `package.json` 的 `files` 字段指定**额外需要包含**的文件：

```json
{
    "files": [
        "dist",      // 构建产物
        "lib",       // 另一种构建产物目录
        "es",        // ESM 格式输出
        "types"      // TypeScript 类型定义
    ]
}
```

#### 入口文件配置

```json
{
    "name": "@myorg/my-lib",
    "main": "./dist/index.umd.cjs",
    "module": "./dist/index.js",
    "types": "./dist/types/index.d.ts",
    "files": ["dist"]
}
```

| 字段 | 说明 |
|------|------|
| `main` | CommonJS 入口 |
| `module` | ESM 入口 |
| `types` | 类型定义 |

#### 排除文件

两种方式：

1. **`.npmignore`**：类似于 `.gitignore`，排除不需要发布的文件
   ```
   # .npmignore 示例
   src/
   test/
   .git/
   node_modules/
   *.md（但保留 README.md）
   ```

2. **`files` 字段白名单**：明确指定要发布的文件，其他自动忽略
   - 不在 `files` 中的文件不会发布（如 `src/`、`node_modules/`）

#### 验证发布内容

```bash
# 本地查看发布会包含哪些文件
npm pack --dry-run
# 或
pnpm pack --dry-run
```

---

### 根目录其他文件

| 目录/文件 | 说明 |
|-----------|------|
| `.cursor/rules/` | Cursor IDE 规则配置 |
| `docs/` | 项目文档 |
| `images/` | 图片资源 |
| `.github/` | GitHub Actions 工作流 |

---

## 根目录 package.json 与 workspace 管理

### 谁定义"哪些是 workspace 里的包"？

在你这个项目里，**不是**根目录 `package.json`，而是 **`pnpm-workspace.yaml`**：

```yaml
packages:
  - 'packages/*'
```

也就是说：`packages/` 下的每一个子目录（如 `core`、`ui`、`web`、`extension`、`desktop`、`mcp-server` 等）都是 workspace 里的一分子，这是 pnpm 根据这个文件认出来的。

---

### 根目录 package.json 在"管"什么？

根目录的 `package.json` 是**整棵 monorepo 的"指挥中心"**，主要体现在：

| 作用 | 例子 |
|------|------|
| **统一入口脚本** | 在根目录执行 `pnpm run build` → 实际跑的是 `pnpm -r build`，会对**所有**子包执行各自的 `build`；`pnpm run lint`、`pnpm run prettier` 同理。 |
| **按包名执行** | `pnpm run build:jmtd` → `pnpm --filter @jd/jmt-design build`，只对指定包执行。 |
| **根自己的依赖** | 根下的 `dependencies` / `devDependencies` 给**根目录**用（例如跑脚本、工具链），不是"强制给每个子包装一份"。 |
| **install 的起点** | 在根目录执行 `pnpm install` 时，pnpm 会结合 `pnpm-workspace.yaml` 和所有子包的 `package.json`，一次性解析并安装整棵 workspace 的依赖。 |

---

### 总结

**"管整个 workspace"** = 根目录的 `package.json` 提供**整仓的统一脚本入口**和 **install 的根节点**，并定义根目录自己需要的依赖；

**"有哪些包属于 workspace"** 则由 `pnpm-workspace.yaml` 决定。

两者一起，才构成"整个 workspace 怎么被管"。
