<template>
  <div>
    <div
      v-for="(card, index) in newsblocks"
      :key="index"
      class="flex flex-col items-center justify-center"
    >
      <div class="card-event">
        <div class="card-event__image">
          <img :src="`/images/${card.image}`" alt="" :class="card.imgclass" />
          <div class="card-event__tag">
            {{ card.events }}
          </div>
        </div>
        <div class="card-event__content">
          <p v-if="card.date" class="card-event__date">{{ card.date }}</p>
          <p v-if="card.titletext" class="card-event__date">
            {{ card.titletext }}
          </p>
          <h3 class="card-event__title">{{ card.title }}</h3>
          <p class="section-text" v-if="card.text" :class="card.textclass">
            {{ card.text }}
          </p>
          <div v-if="card.classbtn" class="card-event__button">
            <Btn
              :class="card.classbtn"
              label="Find out more"
              :color="card.btncolor"
              theme="link"
              size="md"
              arrow
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newsblocks from "@/data/newsBlocks";

export default {
  props: {
    card: Array,
  },

  data() {
    return {
      newsblocks,
    };
  },
};
</script>
