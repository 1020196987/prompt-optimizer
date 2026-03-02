<!--
 * =====================================================
 * Vue 3 语法详细注释版
 * =====================================================
 *
 * 本文件展示了 Vue 3 的核心语法，包括：
 * - template 模板语法
 * - script setup 语法糖
 * - 响应式数据
 * - 事件处理
 * - 条件渲染
 * - 计算属性
 *
 * =====================================================
-->

<template>
    <!--
        =====================
        Vue 模板语法说明
        =====================

        1. <template> 标签：Vue 组件的模板部分，定义组件的 HTML 结构
        2. HTML 中的 {{ }} 是插值表达式，用于显示 JavaScript 数据
        3. v-if 是条件渲染指令
        4. :prop 是 v-bind:prop 的简写，用于传递数据给子组件
        5. @event 是 v-on:event 的简写，用于监听子组件的事件
    -->

    <!--
        NSpace 是 Naive UI 组件库提供的间距组件
        :size="12" 传递数字 12 作为间距大小
        align="center" 设置垂直居中对齐
        data-testid="core-nav" 是测试用的标识符
    -->
    <NSpace :size="12" align="center" data-testid="core-nav">

        <!--
            功能模式选择器组件
            :modelValue="functionMode"  ←  父组件向子组件传递数据
            @update:modelValue="handleFunctionModeChange"  ←  子组件通知父组件数据变化
        -->
        <!--
            =====================
            v-model 双向绑定原理
            =====================

            完整写法：
            <FunctionModeSelector
                :modelValue="functionMode"
                @update:modelValue="handleFunctionModeChange"
            />

            简化写法（完全等价）：
            <FunctionModeSelector v-model="functionMode" />

            原理：
            1. :modelValue="functionMode" - 父组件把 functionMode 传给子组件
            2. @update:modelValue="handleFunctionModeChange" - 子组件值变化时触发此事件
            3. handleFunctionModeChange 被调用，functionMode 被更新
        -->
        <FunctionModeSelector
            :modelValue="functionMode"
            @update:modelValue="handleFunctionModeChange"
        />

        <!--
            =====================
            v-if 条件渲染
            =====================

            v-if="condition" - 当 condition 为 true 时渲染元素，否则不渲染
            v-else-if="condition" - 当前面的条件都不满足时判断
            v-else - 当前面的条件都不满足时渲染

            这里是：只有当 functionMode === 'basic' 时才显示这个组件
        -->

        <!-- 子模式选择器 - 基础模式 -->
        <!--
            v-if="functionMode === 'basic'" - 条件渲染
            :modelValue="basicSubMode" - 传递数据给子组件
            functionMode="basic" - 传递字符串 "basic" 给子组件（静态属性，不需要绑定）
            @change="handleBasicSubModeChange" - 监听子组件的 change 事件
        -->
        <OptimizationModeSelectorUI
            v-if="functionMode === 'basic'"
            :modelValue="basicSubMode"
            functionMode="basic"
            @change="handleBasicSubModeChange"
        />

        <!-- 子模式选择器 - 上下文模式 (Pro) -->
        <OptimizationModeSelectorUI
            v-if="functionMode === 'pro'"
            :modelValue="proSubMode"
            functionMode="pro"
            @change="handleProSubModeChange"
        />

        <!-- 子模式选择器 - 图像模式 -->
        <ImageModeSelector
            v-if="functionMode === 'image'"
            :modelValue="imageSubMode"
            @change="handleImageSubModeChange"
        />
    </NSpace>
</template>

<!--
    =====================
    <script setup> 语法说明
    =====================

    <script setup> 是 Vue 3 的语法糖，相比普通 <script> 更简洁：
    1. 所有在 setup 中定义的变量和函数会自动暴露给模板
    2. 不需要 return 对象
    3. import 的组件直接可以使用
-->
<script setup lang="ts">
    /**
     * =====================================================
     * TypeScript 类型说明
     * =====================================================
     *
     * import type { xxx } from 'xxx' - 只导入类型，不导入值
     * 这种方式在编译后不会有任何输出，减小打包体积
     */

    // =====================
    // 1. import 导入语句
    // =====================

    // 从 'vue' 导入 computed 函数
    // computed 是 Vue 3 的响应式 API，用于创建计算属性
    // 计算属性会自动缓存结果，只有依赖变化时才重新计算
    import { computed } from 'vue'

    // 导入 Vue Router 实例
    // router 是路由管理对象，提供 push、replace 等导航方法
    import { router as routerInstance } from '../../router'

    // 从 'naive-ui' 导入 NSpace 组件
    // 这是 Naive UI 组件库提供的间距容器组件
    import { NSpace } from 'naive-ui'

    // 导入自定义子组件
    // 这些组件在 <template> 中使用
    import FunctionModeSelector from '../FunctionModeSelector.vue'
    import OptimizationModeSelectorUI from '../OptimizationModeSelector.vue'
    import ImageModeSelector from '../image-mode/ImageModeSelector.vue'

    // 导入类型定义（注意是 type 关键字）
    // FunctionMode, BasicSubMode 等是 TypeScript 类型，不是值
    import type { FunctionMode, BasicSubMode, ProSubMode, ImageSubMode } from '@prompt-optimizer/core'

    /**
     * =====================================================
     * 类型别名
     * =====================================================
     *
     * type 是 TypeScript 的类型别名语法
     * 相当于给复杂类型起个简单的名字
     */
    // SubMode 可以是 BasicSubMode 或 ProSubMode 中的任意一个
    type SubMode = BasicSubMode | ProSubMode


    // =====================
    // 2. computed 计算属性
    // =====================

    /*
     * computed() 是 Vue 3 的响应式 API
     *
     * 语法：const 变量 = computed(() => { return 计算结果 })
     *
     * 特点：
     * 1. 自动监听依赖变化
     * 2. 结果会被缓存
     * 3. 只有依赖变化时才重新计算
     *
     * 这里：functionMode 根据当前路由路径计算
     */

    // 从当前路由计算主功能模式（Basic / Pro / Image）
    const functionMode = computed<FunctionMode>(() => {
        // routerInstance.currentRoute.value 获取当前路由信息
        // .path 获取路由路径，如 /basic/system
        const path = routerInstance.currentRoute.value.path

        // if 语句判断路径前缀
        if (path.startsWith('/basic')) return 'basic'
        if (path.startsWith('/pro')) return 'pro'
        if (path.startsWith('/image')) return 'image'

        // 默认返回 'basic'
        return 'basic'
    })

    // 计算基础模式的子模式（system 或 user）
    const basicSubMode = computed<BasicSubMode>(() => {
        // split('/') 把路径按 / 分割成数组
        // ['/basic', 'system'] -> ['', 'basic', 'system']
        // [2] 取第三个元素，即子模式
        const rawSubMode = routerInstance.currentRoute.value.path.split('/')[2]

        // 如果是有效的子模式，返回它
        // 否则返回默认值 'system'
        if (rawSubMode === 'system' || rawSubMode === 'user') {
            return rawSubMode as BasicSubMode  // as 是类型断言，告诉 TS 这是 BasicSubMode 类型
        }

        return 'system'
    })

    // 计算 Pro 模式的子模式（multi 或 variable）
    const proSubMode = computed<ProSubMode>(() => {
        const rawSubMode = routerInstance.currentRoute.value.path.split('/')[2]

        // 标准值
        if (rawSubMode === 'multi' || rawSubMode === 'variable') {
            return rawSubMode as ProSubMode
        }

        // 兼容旧路由：system -> multi, user -> variable
        if (rawSubMode === 'system') return 'multi'
        if (rawSubMode === 'user') return 'variable'

        return 'variable'
    })

    // 计算图像模式的子模式（text2image 或 image2image）
    const imageSubMode = computed<ImageSubMode>(() => {
        const rawSubMode = routerInstance.currentRoute.value.path.split('/')[2]

        if (rawSubMode === 'text2image' || rawSubMode === 'image2image') {
            return rawSubMode as ImageSubMode
        }

        return 'text2image'
    })


    // =====================
    // 3. 常量定义
    // =====================

    /**
     * 默认子模式配置
     * as const 的作用：
     * 1. 让对象的属性变成只读的
     * 2. 让 TypeScript 推导更具体的字面量类型
     */
    const DEFAULT_SUB_MODES = {
        basic: 'system',
        pro: 'variable',
        image: 'text2image'
    } as const


    // =====================
    // 4. 函数定义（事件处理）
    // =====================

    /*
     * =====================================================
     * 函数定义方式
     * =====================================================
     *
     * 在 <script setup> 中定义的函数可以直接在模板中使用
     * 不需要显式 return
     *
     * 箭头函数语法：const 函数名 = (参数) => { 函数体 }
     * 相当于：function 函数名(参数) { 函数体 }
     */

    // 处理功能模式切换
    // 参数 mode 是从子组件传递过来的新模式值
    const handleFunctionModeChange = (mode: FunctionMode) => {
        // 从配置对象中获取当前模式的默认子模式
        const defaultSubMode = DEFAULT_SUB_MODES[mode]

        // router.push() 是 Vue Router 的编程式导航方法
        // 相当于点击链接，会改变 URL 并渲染对应组件
        routerInstance.push(`/${mode}/${defaultSubMode}`)
    }

    // 处理基础模式子模式切换
    const handleBasicSubModeChange = (mode: SubMode) => {
        if (mode === 'system' || mode === 'user') {
            routerInstance.push(`/basic/${mode}`)
        }
    }

    // 处理 Pro 模式子模式切换
    const handleProSubModeChange = (mode: SubMode) => {
        if (mode === 'multi' || mode === 'variable') {
            routerInstance.push(`/pro/${mode}`)
        }
    }

    // 处理图像模式子模式切换
    const handleImageSubModeChange = (mode: ImageSubMode) => {
        routerInstance.push(`/image/${mode}`)
    }

    /**
     * =====================================================
     * <script setup> 总结
     * =====================================================
     *
     * 在 <script setup> 中：
     * 1. import 的组件可以直接在 <template> 中使用
     * 2. 定义的变量和函数会自动暴露给模板
     * 3. 不需要 return 语句
     * 4. 支持 TypeScript 类型标注
     *
     * 响应式数据：
     * - ref() - 创建基本类型的响应式数据
     * - reactive() - 创建对象类型的响应式数据
     * - computed() - 创建计算属性
     *
     * 本文件中的 functionMode, basicSubMode 等都是 computed，
     * 它们依赖 routerInstance.currentRoute，当路由变化时会自动更新
     */
</script>

<!--
    =====================
    完整语法总结
    =====================

    模板中：
    {{ variable }}          - 插值，显示变量值
    v-if="condition"       - 条件渲染
    v-else-if="condition" - 条件渲染
    v-else                 - 条件渲染
    :prop="value"         - v-bind:prop，传递数据给子组件
    @event="handler"      - v-on:event，监听子组件事件
    v-model="value"       - 双向绑定（:modelValue + @update:modelValue 的简写）

    脚本中：
    import { xxx } from 'vue'       - 从模块导入
    import type { xxx } from 'xxx'  - 只导入类型
    import Xxx from './Xxx.vue'     - 导入 Vue 组件
    const xxx = ref(initial)        - 创建响应式数据
    const xxx = computed(() => {}) - 创建计算属性
    const xxx = (param) => {}       - 定义箭头函数
    const xxx = { ... } as const   - 定义常量对象

    组件通信：
    父 -> 子：:prop="value" 传递数据
    子 -> 父：@event="handler" 监听事件
    双向绑定：v-model="value" 或 :modelValue + @update:modelValue
-->
