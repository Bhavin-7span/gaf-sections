<template comments>
  <section class="section section-ourVision">
    <div class="container">
      <div class="vision">
        <div class="vision__content">
          <h3 class="vision__title">
            {{ title }}
          </h3>
          <p class="section-text section-text__green">
            {{ text }}
          </p>
        </div>
        <div class="vision__img">
          <img :src="`/images/${src}`" alt="George Alexander Foundation" />
          <div class="vision__img--content">
            <p class="section-text section-text__green">
              {{ text1 }}
            </p>
            <Btn
              class="mt-3 w-full sm:w-auto"
              label="Call to action "
              color="p1"
              theme="solid"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: String,
    text1: String,
    text: String,
    src: String,
  },
};
</script>
