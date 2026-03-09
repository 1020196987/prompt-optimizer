/**
 * 存储服务 - 工厂模式实现
 *
 * 提供统一的存储提供者创建入口，根据运行环境自动选择最优的存储方案
 *
 * 支持的存储类型：
 * - localStorage: 浏览器本地存储，容量约5MB
 * - dexie: 基于IndexedDB的封装，适合大容量数据
 * - memory: 内存存储，仅运行时有效
 * - file: 文件存储，仅Electron环境可用
 */

import { IStorageProvider } from './types';
import { LocalStorageProvider } from './localStorageProvider';
import { DexieStorageProvider } from './dexieStorageProvider';
import { MemoryStorageProvider } from './memoryStorageProvider';
import { StorageError } from './errors';

/**
 * 存储类型联合类型
 * 定义所有支持的存储方案
 */
export type StorageType = 'localStorage' | 'dexie' | 'memory' | 'file';

/**
 * 存储工厂类
 *
 * 核心职责：
 * 1. 创建存储提供者实例（工厂模式）
 * 2. 缓存实例实现单例（单例模式）
 * 3. 检测运行环境支持的存储类型
 * 4. 提供存储能力查询
 *
 * 使用示例：
 * ```typescript
 * // 获取内存存储（测试用）
 * const memoryStorage = StorageFactory.create('memory');
 *
 * // 获取浏览器本地存储
 * const localStorage = StorageFactory.create('localStorage');
 *
 * // 检测支持的存储类型
 * const supported = StorageFactory.getSupportedTypes();
 * ```
 */
export class StorageFactory {
  /**
   * 单例实例缓存
   *
   * 使用Map存储不同类型存储提供者的单例实例
   * key: 存储类型 (StorageType)
   * value: 存储提供者实例 (IStorageProvider)
   *
   * 为什么用Map：
   * - 比对象更灵活，key可以是字符串
   * - 内置has/get/set方法，使用方便
   * - 查找效率O(1)
   */
  private static instances: Map<StorageType, IStorageProvider> = new Map();

  /**
   * 创建存储提供器
   *
   * 工厂方法：根据传入的存储类型创建对应的存储提供者
   * 如果该类型的实例已存在，直接返回缓存的实例（单例模式）
   *
   * @param type 存储类型，参见 StorageType 类型定义
   * @returns 对应类型的存储提供器实例
   * @throws StorageError 当传入不支持的类型时抛出错误
   *
   * 工作流程：
   * 1. 检查缓存是否已有实例 -> 有则直接返回
   * 2. 根据type创建对应实例 -> 使用switch匹配
   * 3. 将新实例存入缓存 -> 方便下次复用
   * 4. 返回新实例
   */
  static create(type: StorageType): IStorageProvider {
    // 步骤1: 检查是否已有缓存实例
    // has() 方法判断Map中是否存在该key
    if (StorageFactory.instances.has(type)) {
      // get() 方法获取已缓存的实例
      // ! 非空断言，表示我们确信 has() 返回 true 后 value 不为 undefined
      return StorageFactory.instances.get(type)!;
    }

    // 步骤2: 根据类型创建对应实例
    let instance: IStorageProvider;

    // switch语句匹配不同存储类型
    switch (type) {
      case 'localStorage':
        // 浏览器本地存储，适合小量数据（5MB限制）
        instance = new LocalStorageProvider();
        break;

      case 'dexie':
        // IndexedDB封装，适合大容量数据
        instance = new DexieStorageProvider();
        break;

      case 'memory':
        // 内存存储，进程退出后数据丢失，适合测试或临时缓存
        instance = new MemoryStorageProvider();
        break;

      case 'file':
        // 文件存储，仅Electron桌面应用可用
        // 文件存储需要额外配置（路径等），不能通过工厂自动创建
        throw new StorageError(
          'File storage must be created directly with FileStorageProvider constructor',
          'config', // 错误类型：配置错误
        );
        // break 在throw后不需要，但保留代码可读性

      default:
        // 防御性编程：处理未知类型
        // tsconfig严格模式下，default应该处理所有可能值
        // 但为了代码健壮性，仍保留此分支
        throw new StorageError(`Unsupported storage type: ${type}`, 'config', {
          details: `不支持的存储类型: ${type}`,
          storageType: type
        });
    }

    // 步骤3: 将新创建的实例存入缓存
    // set() 方法添加或更新Map中的键值对
    StorageFactory.instances.set(type, instance);

    // 步骤4: 返回新创建的实例
    return instance;
  }

  /**
   * 重置所有实例
   *
   * 清空工厂内部缓存的所有存储提供者实例
   * 主要用于测试场景：确保每次测试从干净状态开始
   *
   * 测试场景示例：
   * ```typescript
   * beforeEach(() => {
   *   StorageFactory.reset(); // 每个测试前清空缓存
   * });
   * ```
   *
   * 注意：此方法同时会重置DexieStorageProvider的数据库迁移状态
   */
  static reset(): void {
    // 清空Map中的所有键值对
    StorageFactory.instances.clear();

    // 重置DexieStorageProvider的迁移状态
    // Dexie使用版本号管理数据库迁移，需要在测试间重置
    DexieStorageProvider.resetMigrationState();
  }

  /**
   * 获取当前环境支持的存储类型列表
   *
   * 自动检测运行环境，返回所有可用的存储方案
   * 这是一个动态检测过程，每次调用都会检查
   *
   * 检测逻辑：
   * - memory: 始终可用（纯JS实现）
   * - localStorage: 需要window.localStorage存在
   * - dexie: 需要window.indexedDB存在
   * - file: 需要Electron环境（process.versions.electron存在）
   *
   * @returns 支持的存储类型数组
   *
   * 使用示例：
   * ```typescript
   * const supported = StorageFactory.getSupportedTypes();
   * // 浏览器环境: ['memory', 'localStorage', 'dexie']
   * // Node.js: ['memory']
   * // Electron: ['memory', 'localStorage', 'dexie', 'file']
   * ```
   */
  static getSupportedTypes(): StorageType[] {
    // 初始化空数组
    const types: StorageType[] = [];

    // 1. memory存储总是可用
    // 纯JavaScript实现，不依赖任何外部API
    types.push('memory');

    // 2. 检查localStorage支持
    // typeof window !== 'undefined' 检测浏览器环境
    // window.localStorage 实际检查API是否可用（某些隐私模式可能不可用）
    if (typeof window !== 'undefined' && window.localStorage) {
      types.push('localStorage');
    }

    // 3. 检查IndexedDB支持（dexie依赖此API）
    // IndexedDB是浏览器内置的数据库API
    if (typeof window !== 'undefined' && window.indexedDB) {
      types.push('dexie');
    }

    // 4. 检查Electron环境支持文件存储
    // process.versions?.electron 是Electron运行时特有的属性
    // 使用可选链?.防止Node.js环境下报错
    if (typeof process !== 'undefined' && process.versions?.electron) {
      types.push('file');
    }

    // 返回检测结果
    return types;
  }

  /**
   * 检查特定存储类型是否在当前环境可用
   *
   * 快捷方法：判断指定类型是否在getSupportedTypes()结果中
   *
   * @param type 要检查的存储类型
   * @returns true表示可用，false表示不可用
   *
   * 使用示例：
   * ```typescript
   * if (StorageFactory.isSupported('file')) {
   *   const storage = StorageFactory.create('file');
   * }
   * ```
   */
  static isSupported(type: StorageType): boolean {
    // 调用getSupportedTypes()获取可用列表
    // 使用数组的includes方法判断是否包含指定类型
    return StorageFactory.getSupportedTypes().includes(type);
  }
}
