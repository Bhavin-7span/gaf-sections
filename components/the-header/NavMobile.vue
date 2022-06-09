<template comments>
  <nav id="mobile-nav" class="mobile-nav">
    <!-- MENU 1 -->
    <ul>
      <!-- MENU 1 ITEMS -->
      <li class="mm-li" v-for="(alpha, i) in $options.items" :key="i">
        <component :is="alpha.items ? 'span' : 'a'">
          {{ alpha.label }}
        </component>
        <!-- MENU 2  -->
        <ul v-if="alpha.items">
          <!-- MENU 2 : ITEMS -->
          <li class="mm-li" v-for="(beta, j) in alpha.items" :key="`${i}-${j}`">
            <component :is="beta.items ? 'span' : 'a'">
              {{ beta.label }}
            </component>
            <!-- MENU 3 -->
            <ul v-if="beta.items">
              <!-- MENU 3 : ITEMS -->
              <li
                class="mm-li"
                v-for="(theta, k) in beta.items"
                :key="`${i}-${j}-${k}`"
              >
                <a href="#">{{ theta.label }}</a>
              </li>
              <!-- MENU 3 : FOOTER -->
              <li class="mobile-nav__footer">
                <TheHeaderNavCard v-if="beta.card" :data="beta.card" />
              </li>
            </ul>
          </li>
          <!-- MENU 2 : FOOTER -->
          <li class="mobile-nav__footer">
            <TheHeaderNavCard v-if="alpha.card" :data="alpha.card" />
          </li>
        </ul>
      </li>
      <!-- MENU 1 : FOOTER -->
      <li>
        <!-- ACTIONS -->
        <div class="border-t-2 border-white border-b-2 py-5 flex items-center">
          <Btn color="white" size="md" theme="trn" label="My Account" />
          <Btn
            size="md"
            theme="login"
            label="Login"
            icon="/icons/login-white.svg"
          />
        </div>
        <!-- SOCIAL -->
        <div class="mobile-nav__social">
          <a href="#"><img src="/icons/facebook.svg" alt="" /></a>
          <a href="#"><img src="/icons/youtube.svg" alt="" /></a>
          <a href="#"><img src="/icons/twitter.svg" alt="" /></a>
        </div>
        <!-- OTHER LINKS -->
        <div class="mobile-nav__links">
          <a href="">Links</a>
          <a href="">Contact</a>
          <a href="">FAQs</a>
        </div>
      </li>
    </ul>
  </nav>
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
