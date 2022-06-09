<template>
  <section class="md:py-20 section-headerstandard" :class="classHeader">
    <div class="container">
      <div class="header-standard">
        <div class="header-standard__left">
          <Breadcrumbs v-if="breadcrumbs"></Breadcrumbs>
          <p class="header-standard__title-text">
            {{ titleText }}
          </p>
          <h2 class="header-standard__title">
            {{ title }}
          </h2>
        </div>
        <div v-if="text || bold" class="header-standard__right">
          <span class="header-standard__text">{{ text }} </span>
          <b class="font-bold">{{ bold }} </b>
        </div>

        <div class="tab" v-if="tabNavigation">
          <div class="tab-nav">
            <a
              v-for="(nav, index) in tabNavigation"
              :key="index"
              href="javascript:;"
              class="tab-nav__link"
              :data-tab="nav.id"
              :class="nav.isActive ? 'is-active' : ''"
            >
              {{ nav.label }}
            </a>
          </div>
          <div class="tab-content">
            <div
              v-for="(nav, index) in tabNavigation"
              :id="nav.id"
              :key="index"
              class="tab-card"
              :class="nav.isActive ? 'is-active' : ''"
            >
              <a href="javascript:;" class="tab-card__link" :data-tab="nav.id">
                {{ nav.label }}

                <img src="/icons/arrow-down-dark.svg" alt="" />
              </a>
              <div class="tab-card__content">
                <slot :name="nav.id"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    bold: String,
    breadcrumbs: Boolean,
    classHeader: String,
    titleText: String,
    text: String,
    title: String,
    tabNavigation: Boolean,
  },
};
</script>
