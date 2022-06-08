<template comments>
  <section class="footer relative">
    <!-- Footer Top -->
    <div class="footer__top relative">
      <div class="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <div
          class="footer__left bg-p1-700 py-16 text-center lg:text-left lg:col-span-1"
        >
          <div class="footer__left-content relative z-10 container">
            <!-- Logo -->
            <a href="javascript:;" class="block">
              <img class="w-36 inline" src="/images/logo-white.svg" alt="" />
            </a>
            <p class="section-text font-light text-white mt-6 mb-3 lg:flex">
              <img
                class="mx-auto h-4 w-4 lg:mr-3 lg:ml-0 lg:mt-1"
                src="/icons/location-green.svg"
                alt="location"
              />
              Level 3, 111 Collins Street <br />
              Melbourne VIC 3000 <br />Australia
            </p>
            <a
              href="tel:+61396503188"
              class="text-b4 font-light text-white mt-2 block lg:flex lg:m-0"
            >
              <img
                class="mx-auto h-4 w-4 lg:mr-3 lg:ml-0 lg:mt-1"
                src="/icons/phone-green.svg"
                alt="phone"
              />
              +61 3 96503188
            </a>
            <Btn
              class="mt-6"
              label="Login"
              color="p1-dark"
              theme="outline"
              size="md"
              icon="/icons/user-green.svg"
            />
            <Btn
              class="mt-6"
              label="Donate"
              color="p1-dark"
              theme="solid"
              size="md"
            />
          </div>
        </div>
        <div class="footer__right py-12 lg:py-16 lg:col-span-2">
          <div
            class="footer__right-content container lg:grid lg:gap-6 lg:grid-cols-4"
          >
            <!-- Col 1 -->
            <div class="mt-8 lg:mt-0">
              <FooterLinks
                title="Our Vision"
                :links="['About us', 'Our People', 'Publications']"
              />
            </div>

            <!-- Col 2 -->
            <div>
              <FooterLinks
                title="Our Programs"
                :links="['Scholarships programs', 'Fellowship', 'How to apply']"
              />
            </div>

            <!-- COl 3 -->
            <div>
              <FooterLinks
                title="Our History"
                :links="['Meet George', 'The GAF story']"
              />
            </div>

            <div>
              <!-- Col 4 -->
              <FooterLinks
                title="Our Community"
                :links="['Honour Roll', 'News']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Center Footer -->
    <div
      class="footer__center border-t border-p1-500 py-6 text-center lg:text-left"
    >
      <div class="container">
        <div class="lg:flex lg:justify-between lg:items-center">
          <ul class="footer__imp-links">
            <li><a href="javascript:;">Policies</a></li>
            <li><a href="javascript:;">Sitemap</a></li>
          </ul>

          <div
            class="section-text font-normal text-b5 text-p2-300 mt-4 lg:mt-0"
          >
            © 2022 The George Alexander Foundation. All rights reserved.
            <span class="block mt-3 lg:mt-0 lg:inline-block">
              Crafted by Soul+Wolf
            </span>
          </div>

          <div class="footer__social">
            <div class="footer__social-links">
              <a href="#"><img src="/icons/fb-darkgreen.svg" /></a>
              <a href="#"><img src="/icons/youtube-darkgreen.svg" /></a>
              <a href="#"><img src="/icons/insta-darkgreen.svg" /></a>
              <a href="#"><img src="/icons/linkedin-darkgreen.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom:2 -->
    <div class="footer__bottom bg-p2-900 py-8">
      <div class="container">
        <div class="lg:flex lg:items-center lg:justify-center">
          <div class="flex justify-center space-x-2">
            <img class="h-8" src="/icons/australian-aboriginal.svg" alt="" />
            <img class="h-8" src="/icons/torres-strait-island.svg" alt="" />
          </div>

          <p
            class="section-text text-white text-center text-b5 mt-6 lg:mt-0 lg:text-left lg:px-6"
          >
            We acknowledge the Traditional Custodians of the land on which we
            work. We pay our respects to their Elders past and present.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
