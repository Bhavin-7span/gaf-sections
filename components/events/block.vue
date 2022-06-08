<template>
  <div class="event-slider__item">
    <div class="event-card">
      <div class="event-card__image">
        <img :src="`/images/${src}`" alt="" />
      </div>
      <div class="event-card__content content--medium">
        <h2 class="section-title mb-10">{{ title }}</h2>
        <p class="event-card__title-text">Date Posted: {{ titleText }}</p>
        <h4 class="event-card__subtitle mt-3">
          {{ subtitle }}
        </h4>
        <p class="event-card__text mt-1">
          {{ text }}
        </p>
        <Btn
          class="mt-3"
          label="Find out more"
          color="p1"
          theme="link"
          size="md"
          arrow
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    titleText: String,
    src: String,
    text: String,
    subtitle: String,
  },
};
</script>
