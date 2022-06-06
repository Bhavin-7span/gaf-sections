<template>
  <component
    :is="$attrs.href ? 'a' : 'button'"
    :type="$attrs.href ? null : 'button'"
    class="button"
    :class="[
      size && `button--${size}`,
      color && `button--${color}`,
      theme && `button--${theme}`,
      { 'button--icon': icon && !label },
    ]"
  >
    <img v-if="icon" class="button__icon" :src="icon" alt="" />
    <span v-if="label" class="button__label">{{ label }}</span>
    <span v-if="arrow" class="button__arrow"></span>
  </component>
</template>

<script>
export default {
  props: {
    label: String,
    size: String,
    color: String,
    theme: String,
    icon: String,
    arrow: Boolean,
  },
}
</script>
