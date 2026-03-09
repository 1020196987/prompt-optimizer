# 设计模式

## 什么是设计模式？

**设计模式**是软件工程中反复出现的问题的**可复用解决方案**。

简单说：前人总结的代码组织"套路"，告诉你这类问题该怎么写比较好。

---

## 23 种设计模式

由 GoF（四人帮）在 1994 年提出，分为三类：

| 类别 | 数量 | 作用 |
|------|------|------|
| **创建型** | 5 | 对象的创建方式 |
| **结构型** | 7 | 对象的组合方式 |
| **行为型** | 11 | 对象的职责/交互 |

### 创建型（5种）

| 模式 | 用途 |
|------|------|
| 单例模式 | 保证一个类只有一个实例 |
| 工厂方法 | 定义创建对象的接口 |
| 抽象工厂 | 创建一系列相关对象 |
| 建造者 | 复杂对象的构建 |
| 原型 | 通过克隆创建对象 |

### 结构型（7种）

| 模式 | 用途 |
|------|------|
| 适配器 | 接口转换 |
| 桥接 | 分离抽象与实现 |
| 组合 | 树形结构 |
| 装饰器 | 动态添加功能 |
| 外观 | 统一接口 |
| 享元 | 共享对象 |
| 代理 | 控制访问 |

### 行为型（11种）

| 模式 | 用途 |
|------|------|
| 职责链 | 传递请求 |
| 命令 | 请求封装 |
| 迭代器 | 遍历集合 |
| 中介者 | 对象通信 |
| 备忘录 | 状态保存 |
| 观察者 | 事件通知 |
| 状态 | 状态切换 |
| 策略 | 算法替换 |
| 模板方法 | 流程框架 |
| 访问者 | 操作分离 |
| 空对象 | 默认行为 |

---

## 项目中用到的模式

### 1. 工厂模式（创建型）

**位置**：`packages/core/src/services/storage/factory.ts`

**解决的问题**：统一创建对象的入口，隐藏创建细节。

**代码示例**：
```typescript
class StorageFactory {
  static create(type: StorageType): IStorageProvider {
    switch (type) {
      case 'memory':
        return new MemoryStorageProvider();
      case 'localStorage':
        return new LocalStorageProvider();
      // ...
    }
  }
}

// 调用方不需要知道具体创建过程
const storage = StorageFactory.create('memory');
```

**优点**：
- 调用方与具体类解耦
- 新增类型只需改工厂代码
- 符合开闭原则

---

### 2. 单例模式（创建型）

**位置**：`packages/core/src/services/storage/factory.ts`

**解决的问题**：保证一个类只有一个实例，并提供全局访问点。

**代码示例**：
```typescript
class StorageFactory {
  // 静态实例缓存
  private static instances: Map<StorageType, IStorageProvider> = new Map();

  static create(type: StorageType): IStorageProvider {
    // 已有缓存直接返回
    if (StorageFactory.instances.has(type)) {
      return StorageFactory.instances.get(type)!;
    }

    // 创建并缓存
    const instance = new MemoryStorageProvider();
    StorageFactory.instances.set(type, instance);
    return instance;
  }
}

// 多次调用返回同一实例
const a = StorageFactory.create('memory');
const b = StorageFactory.create('memory');
console.log(a === b); // true
```

**优点**：
- 节省资源
- 保证全局唯一性

---

### 3. 适配器模式（结构型）

**位置**：`packages/core/src/services/storage/adapter.ts`

**解决的问题**：为不兼容的接口提供兼容层。

**代码示例**：
```typescript
class StorageAdapter implements IStorageProvider {
  constructor(private readonly baseProvider: IStorageProvider) {}

  // 基础方法直接代理
  async getItem(key: string): Promise<string | null> {
    return this.baseProvider.getItem(key);
  }

  // 高级方法：统一接口，内部处理兼容
  async updateData<T>(key: string, modifier: (current: T | null) => T): Promise<void> {
    // 如果底层支持，直接用
    if ('updateData' in this.baseProvider) {
      return (this.baseProvider as any).updateData(key, modifier);
    }

    // 否则用锁实现
    const release = await this.acquireLock(key);
    try {
      const current = await this.getItem(key);
      const newValue = modifier(current ? JSON.parse(current) : null);
      await this.setItem(key, JSON.stringify(newValue));
    } finally {
      release();
    }
  }
}
```

**优点**：
- 统一不同存储的 API
- 隐藏实现复杂性

---

## 模式对比

| 模式 | 解决什么问题 | 本项目应用 |
|------|-------------|-----------|
| 工厂 | 对象创建 | StorageFactory.create() |
| 单例 | 全局唯一 | instances 缓存 |
| 适配器 | 接口兼容 | StorageAdapter 包装 |

---

## 何时使用设计模式

- 代码重复、难以维护时
- 需要灵活扩展时
- 需要解耦复杂关系时

**不要过度设计**：简单的代码好过复杂的设计模式。
