<template comments>
  <section class="section event">
    <div class="container">
      <!-- Slider -->
      <div class="event-slider event-block">
        <EventsBlock
          v-for="(event, index) in events"
          :key="index"
          :event="event"
        />
        <!-- <EventsBlock
          src="event-img.jpg"
          title="Events"
          titleText="22 JANUARY 2022"
          subtitle="GAF Street Soccer"
          text="Calling all Melbourne-based GAF scholars and alumni! Want toget active, network and support a great cause?..."
        />
        <EventsBlock
          src="event-img.jpg"
          title="Events"
          titleText="22 JANUARY 2022"
          subtitle="GAF Street Soccer"
          text="Calling all Melbourne-based GAF scholars and alumni! Want toget active, network and support a great cause?..."
        /> -->
      </div>

      <!-- Slick Dots -->
      <div
        class="mt-8 pb-8 text-center lg:pb-0 lg:mt-0 lg:hidden lg:border-none lg:p-0 lg:text-left"
      >
        <div class="event-slider-dots">
          <!-- Slider Dots Will Be Apended Here -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import events from "@/data/eventsBlocks";
export default {
  data() {
    return {
      events,
    };
  },
};
</script>
