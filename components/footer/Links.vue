<template>
  <div class="footer-links" data-toggle-container>
    <div class="footer-links__title">
      <a href="#">{{ title }}</a>
      <button class="footer-toggle" data-toggle></button>
    </div>
    <ul class="footer-links__list" data-toggle-target v-if="links.length > 0">
      <li v-for="(link, index) in links" :key="`link-${index}`">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    links: Array,
  },
}
</script>
