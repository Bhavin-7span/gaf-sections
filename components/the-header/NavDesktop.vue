<template comments>
  <ul class="desktop-nav">
    <TheHeaderNavItemDesktop
      v-for="(item, index) in $options.items"
      :key="index"
      :data="item"
    />
  </ul>
</template>

<script>
export default {
  items: [
    {
      label: "Our Vision",
      items: [
        {
          label: "About us ",
        },
        { label: "Our People" },
        {
          label: "Publications ",
          items: [
            {
              label: "Annual reports",
            },
            {
              label: "Campus Newsletter",
            },
          ],

          card: {
            subtitle: "Recent Post",
            title: "50th Anniversary Hoodie Competition",
            image: "images/card-img.png",
            date: "07 April 2022",
            post: "Posted by admin",
          },
        },
      ],

      card: {
        subtitle: "Recent Post",
        title: "50th Anniversary Hoodie Competition",
        image: "images/card-img.png",
        date: "07 April 2022",
        post: "Posted by admin",
      },
    },
    {
      label: "Our Programs",
    },
    {
      label: "Our History",
    },
    {
      label: "Our Community",
    },
    {
      label: "Grantees",
    },
    {
      label: "Contact Us",
    },
  ],
};
</script>
