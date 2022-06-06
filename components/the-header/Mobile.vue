<template comments>
  <header class="mobile-header">
    <!-- TOP -->
    <div class="mobile-header__top">
      <Btn class="mobile-search-opener" icon="/icons/search.svg" size="md" />

      <!-- LOGO -->
      <a href="#">
        <img src="/images/logo.svg" class="w-36" alt="" />
      </a>
      <Btn
        href="#mobile-nav"
        class="mobile-nav-closer"
        icon="/icons/close-p1.svg"
        size="md"
      />
      <Btn
        href="#mobile-nav"
        class="mobile-nav-opener px-2"
        icon="/icons/menu-p1.svg"
        size="md"
      />
    </div>

    <!-- SEARCH -->
    <TheHeaderSearch />

    <!-- NAV -->
    <TheHeaderNavMobile />
  </header>
</template>
