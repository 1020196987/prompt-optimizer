# 工厂模式（Factory Pattern）

## 什么是工厂模式

工厂模式是一种创建型设计模式，它提供了一种创建对象的最佳方式，而无需指定具体的类。

## 问题场景

假设我们需要一个根据用户类型创建不同处理器的系统：

```typescript
// ❌ 不使用工厂模式：调用者需要知道所有类的细节
if (type === 'admin') {
  handler = new AdminHandler();
} else if (type === 'user') {
  handler = new UserHandler();
} else if (type === 'guest') {
  handler = new GuestHandler();
}
```

问题：
- 调用者需要知道所有具体类名
- 新增类型需要修改调用方代码
- 违反"开闭原则"（对扩展开放，对修改关闭）

## 工厂模式解决方案

```typescript
// ✅ 使用工厂模式：统一入口
class HandlerFactory {
  static create(type: string): IHandler {
    switch (type) {
      case 'admin': return new AdminHandler();
      case 'user': return new UserHandler();
      case 'guest': return new GuestHandler();
      default: throw new Error('Unknown type');
    }
  }
}

// 调用方只需知道工厂和接口
const handler = HandlerFactory.create('admin');
```

## 工厂模式的三种形式

### 1. 简单工厂（Simple Factory）

```typescript
class StorageFactory {
  static create(type: StorageType): IStorageProvider {
    switch (type) {
      case 'memory': return new MemoryStorageProvider();
      case 'localStorage': return new LocalStorageProvider();
      // ...
    }
  }
}
```

**特点**：一个工厂类，一个 create 方法

### 2. 工厂方法（Factory Method）

```typescript
// 抽象工厂
abstract class StorageFactory {
  abstract create(): IStorageProvider;
}

// 具体工厂
class MemoryStorageFactory extends StorageFactory {
  create(): IStorageProvider {
    return new MemoryStorageProvider();
  }
}

// 使用
const factory: StorageFactory = new MemoryStorageFactory();
const storage = factory.create();
```

**特点**：每个产品对应一个具体工厂

### 3. 抽象工厂（Abstract Factory）

```typescript
// 抽象工厂：创建一系列相关对象
interface UIFactory {
  createButton(): Button;
  createInput(): Input;
  createModal(): Modal;
}

// 具体工厂：创建特定风格的一套组件
class LightThemeFactory implements UIFactory {
  createButton() { return new LightButton(); }
  createInput() { return new LightInput(); }
  createModal() { return new LightModal(); }
}

class DarkThemeFactory implements UIFactory {
  createButton() { return new DarkButton(); }
  createInput() { return new DarkInput(); }
  createModal() { return new DarkModal(); }
}
```

**特点**：创建一系列相互关联的对象

## 工厂模式的优点

| 优点 | 说明 |
|------|------|
| **解耦** | 调用者与具体实现解耦 |
| **单一职责** | 创建逻辑集中在工厂 |
| **开闭原则** | 新增产品只需改工厂 |
| **易于测试** | 可以轻松 mock 工厂 |

## 工厂模式的缺点

| 缺点 | 说明 |
|------|------|
| **类数量增加** | 每种产品都需要具体类 |
| **复杂度上升** | 项目变得更复杂 |
| **不够灵活** | 静态工厂难以扩展 |

## 本项目中的实际例子

### StorageFactory（简单工厂）

位置：`packages/core/src/services/storage/factory.ts`

```typescript
export class StorageFactory {
  // 单例实例缓存
  private static instances: Map<StorageType, IStorageProvider> = new Map();

  static create(type: StorageType): IStorageProvider {
    // 1. 检查缓存
    if (StorageFactory.instances.has(type)) {
      return StorageFactory.instances.get(type)!;
    }

    // 2. 创建实例
    let instance: IStorageProvider;
    switch (type) {
      case 'memory':
        instance = new MemoryStorageProvider();
        break;
      case 'localStorage':
        instance = new LocalStorageProvider();
        break;
      case 'dexie':
        instance = new DexieStorageProvider();
        break;
      // ...
    }

    // 3. 缓存并返回
    StorageFactory.instances.set(type, instance);
    return instance;
  }
}
```

### 结合单例模式

本项目的 StorageFactory 同时使用了：
- **工厂模式**：统一创建入口
- **单例模式**：缓存实例，重复调用返回同一对象

## 何时使用工厂模式

- 创建逻辑复杂，需要封装
- 需要统一创建入口
- 需要根据环境/配置创建不同对象
- 需要单例模式（工厂内缓存实例）

## 对比总结

| 模式 | 适用场景 |
|------|----------|
| 简单工厂 | 产品种类少，创建逻辑简单 |
| 工厂方法 | 产品种类多，需要继承扩展 |
| 抽象工厂 | 产品系列多，需要整体切换 |
