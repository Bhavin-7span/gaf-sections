<template comments>
  <section class="section-image-block">
    <div class="image-block" :class="classImage">
      <img :src="`/images/${image}`" class="" />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    classImage: String,
    image: String,
  },
};
</script>
