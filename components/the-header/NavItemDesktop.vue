<template comments>
  <li>
    <a href="#" class="desktop-nav__label">{{ data.label }}</a>
    <!-- SUBNAV -->
    <div class="desktop-nav__items">
      <div class="container">
        <div class="flex justify-between">
          <div class="w-10/12">
            <h2 class="desktop-subnav__title">{{ data.label }}</h2>
            <ul class="desktop-subnav">
              <!-- COL:SUBNAV -->
              <li v-for="(nav, i) in data.items" :key="`top-${i}`">
                <a href="#" class="desktop-subnav__subtitle">{{ nav.label }}</a>
                <div class="desktop-subnav__links">
                  <a
                    href="#"
                    v-for="(link, j) in nav.items"
                    :key="`link-${i}-${j}`"
                  >
                    {{ link.label }}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <TheHeaderNavCard v-if="data.card" :data="data.card" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>
