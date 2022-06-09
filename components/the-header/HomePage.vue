<template comments>
  <section class="section section-homepage">
    <div class="container">
      <div class="hero">
        <div class="hero__video">
          <div class="hero__video-wrap relative">
            <img src="../../static/images/video-poster.jpg" id="overlay" />
            <div id="player"></div>
            <a
              target="_blank"
              href="https://developers.google.com/youtube/iframe_api_reference"
            >
              Youtube iframe API</a
            >
          </div>
        </div>
        <div class="hero__content">
          <h2 class="hero-title">{{ title }}</h2>
          <div
            class="mt-0 md:mt-2 md:flex md:justify-between items-end lg:items-start"
          >
            <p class="section-text section-text__green md:w-1/2">{{ text }}</p>
            <Btn
              class="mt-3 w-full sm:mt-0 sm:w-auto"
              label="Call to action "
              color="s1"
              theme="solid"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  props: {
    hero: String,
    title: String,
    text: String,
  },
};
</script>
