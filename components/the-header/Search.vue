<template comments>
  <div class="search">
    <div class="search__container">
      <input placeholder="Search for keywords" class="search__input" />
      <button type="button" class="search__submit">
        <img src="/icons/search.svg" alt="" />
      </button>
    </div>
    <div class="ml-3 xl:hidden">
      <Btn class="mobile-search-closer" size="md" icon="/icons/close.svg" />
    </div>
  </div>
</template>
