<template>
  <div class="tab-row">
    <div class="tab-row__content">
      <h4 class="tab-row__title">{{ title }}</h4>
      <div class="row-content" v-html="description"></div>
    </div>
    <div class="tab-row__image">
      <img :src="`/images/${image}`" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>
