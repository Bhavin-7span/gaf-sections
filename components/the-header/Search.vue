<template comments>
  <div class="search">
    <div class="search__container">
      <input placeholder="Search for keywords.." class="search__input" />
      <button type="button" class="search__submit">
        <img src="/icons/search.svg" alt="" />
      </button>
    </div>
    <div class="ml-3 xl:hidden">
      <button class="mobile-search-closer">
        <svg
          width="15"
          height="15"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 17L1 1M17 1L1 17"
            stroke="#1C4953"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
