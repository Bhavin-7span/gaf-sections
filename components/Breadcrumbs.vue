<template>
  <ol
    class="breadcrumbs"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <a itemprop="item" href="/">
        <span itemprop="name">Top Level</span>
      </a>
      <meta itemprop="position" content="0" />
    </li>
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
     
    >
      <a itemprop="item" href="#">
        <span itemprop="name">Secondary Level</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
      class="current"
    >
      <a itemprop="item" href="#">
        <span itemprop="name">Current Page</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
  </ol>
</template>
