<template comments>
  <header class="desktop-header">
    <!-- LOGO -->
    <div class="py-3">
      <a href="#">
        <img class="lg:w-48" src="/images/logo.svg" alt="" />
      </a>
    </div>

    <!-- NAV -->
    <!-- <div class="flex items-stretch flex-grow justify-center"></div> -->

    <TheHeaderNavDesktop />
    <TheHeaderSearch />

    <!-- ACTIONS -->
    <div class="flex items-center">
      <Btn
        href="#mobile-nav"
        class="mobile-nav-user"
        icon="/icons/user.svg"
        size="md"
      />
      <Btn
        class="desktop-search-opener ml-2"
        icon="/icons/search.svg"
        size="md"
      />
      <Btn
        class="desktop-search-closer ml-2"
        icon="/icons/close.svg"
        size="md"
      />
    </div>
  </header>
</template>
