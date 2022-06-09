<template comments>
  <div class="lg:ml-auto">
    <p class="nav-card__subtitle">{{ data.subtitle }}</p>
    <div class="nav-card">
      <img :src="data.image" alt="" />
      <h3 class="nav-card__title">{{ data.title }}</h3>
      <p class="nav-card__desc">{{ data.desc }}</p>
      <div class="flex">
        <p class="nav-card__date">{{ data.date }}</p>
        <p class="nav-card__post">{{ data.post }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
};
</script>
