<template>
  <section class="section section-headerstandard" :class="classHeader">
    <div class="container">
      <div class="header-standard">
        <div class="lg:w-1/2">
          <Breadcrumbs
            v-if="breadcrumbs"
            
          ></Breadcrumbs>
          <p class="title-small">
            {{ titleText }}
          </p>
          <h2 class="section-title">
            {{ title }}
          </h2>
        </div>
        <div v-if="text || bold" class="flex items-baseline">
          <span class="section-text">{{ text }} </span>
          <b class="text-300 font-bold">{{ bold }} </b>
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
