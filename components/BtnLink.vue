<template>
  <a class="button-link" href="#">
    <img class="button-link__icon" v-if="icon" :src="icon" />
    <span>{{ label }}</span>
  </a>
</template>

<script>
export default {
  props: {
    label: String,
    icon: String,
  },
}
</script>
