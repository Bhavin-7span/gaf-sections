<template>
  <div>
    <div class="event-wrap">
      <div class="event-slider__item">
        <div class="event-card">
          <div class="event-card__image">
            <img :src="`/images/${event.src}`" alt="" />
          </div>
          <div class="event-card__content content--medium">
            <h2 class="section-title mb-10">{{ event.title }}</h2>
            <p class="event-card__title-text">
              Date Posted: {{ event.titleText }}
            </p>
            <h4 class="event-card__subtitle mt-3">
              {{ event.subtitle }}
            </h4>
            <p class="event-card__text mt-1">
              {{ event.text }}
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
      <div class="event-calendar">
        <div class="event-box">
          <div class="event-box__icon" v-if="event.calIcon">
            <img :src="`/images/${event.calIcon}`" alt="" />
          </div>
          <div class="event-box__content">
            <h4 class="event-box__title">{{ event.calTitle }}</h4>
            <p class="event-box__text">{{ event.calText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    event: Object,
    //eventList: Object,
  },
};
</script>
