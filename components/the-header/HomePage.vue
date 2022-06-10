<template comments>
  <section class="section section-homepage">
    <div class="container">
      <div class="hero">
        <div class="hero__video">
          <div class="hero__video-wrap">
            <img src="/images/video-poster.jpg" />
            <iframe
              src="https://www.youtube.com/embed/FSvFcvm9YKg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <a
            target="_blank"
            href="https://developers.google.com/youtube/iframe_api_reference"
          >
          </a>
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
