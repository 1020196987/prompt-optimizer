<!-- 功能：通用操作按钮组件，封装 Naive UI NButton -->
<template>
  <!-- 按钮根元素 -->
  <NButton
    :type="buttonType"
    :size="buttonSize"
    :loading="loading"
    :loading-text="loadingText || t('common.loading')"
    :disabled="loading"
    @click="$emit('click')"
    class="action-button"
    :ghost="ghost"
    :round="round"
  >
    <!-- 图标插槽：优先使用传入的插槽，否则显示 icon prop -->
    <template #icon>
      <slot name="icon">
        <span class="text-base sm:text-lg">{{ icon }}</span>
      </slot>
    </template>
    <!-- 按钮文字：屏幕宽度 ≤ md (768px) 时隐藏 -->
    <span class="text-sm max-md:hidden">{{ text }}</span>
  </NButton>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'
import { NButton } from 'naive-ui'

const { t } = useI18n()

/**
 * 组件 Props 定义
 * @property icon - 图标文字（如 emoji）
 * @property text - 按钮文本（必填）
 * @property loading - 加载状态，显示加载图标
 * @property loadingText - 加载中显示的文字
 * @property type - 按钮类型：default/tertiary/primary/success/info/warning/error
 * @property size - 按钮尺寸：tiny/small/medium/large
 * @property ghost - 幽灵按钮（透明背景）
 * @property round - 圆角按钮
 */
interface Props {
  icon?: string
  text: string
  loading?: boolean
  loadingText?: string
  type?: 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error'
  size?: 'tiny' | 'small' | 'medium' | 'large'
  ghost?: boolean
  round?: boolean
}

/**
 * 使用 withDefaults 设置默认值
 * - type: 'default' 默认普通按钮
 * - size: 'medium' 中等尺寸
 * 非 - ghost: false幽灵按钮
 * - round: true 默认圆角
 */
const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'medium',
  ghost: false,
  round: true
})

// 向外发射 click 事件
defineEmits<{
  (e: 'click'): void
}>()

// 动态计算按钮类型和尺寸，保持与主题的一致性
const buttonType = computed(() => props.type)
const buttonSize = computed(() => props.size)
</script>

<style scoped>
/**
 * 按钮基础样式
 * - 添加过渡动画，0.2秒完成所有属性变化
 */
.action-button {
  /* 保持与原有主题系统的兼容性 */
  transition: all 0.2s ease;
}

/**
 * 悬停效果
 * - 鼠标悬停时按钮向上移动 1px，增加点击欲望
 */
.action-button:hover {
  transform: translateY(-1px);
}
</style>
