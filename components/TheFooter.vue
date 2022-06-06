<template comments>
  <section class="footer">
    <!-- Footer Top -->
    <div class="md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
      <div
        class="footer__left bg-p1-700 py-16 text-center lg:text-left lg:col-span-1"
      >
        <div class="container">
          <!-- Logo -->
          <a href="javascript:;" class="block">
            <img class="w-36 inline" src="/images/logo-white.svg" alt="" />
          </a>
          <p class="section-text text-white mt-6">
            Level 3, 111 Collins Street Melbourne VIC 3000 Australia
          </p>
          <a href="tel:+61396503188" class="text-b3 text-white mt-2 block">
            +61 3 96503188
          </a>
          <Btn
            class="mt-3"
            label="Login"
            color="p1"
            theme="outline"
            size="md"
          />
          <Btn class="mt-3" label="Donate" color="p1" theme="solid" size="md" />
        </div>
      </div>
      <div class="footer__right py-16 lg:col-span-2">
        <div class="container">
          <div class="lg:grid lg:gap-6 lg:grid-cols-4">
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
    <!-- Bottom Footer -->
    <div class="border-t border-p1-500 py-6 text-center lg:text-left">
      <div class="container">
        <div class="lg:flex lg:justify-between lg:items-center">
          <ul class="footer__imp-links">
            <li><a href="javascript:;">Policies</a></li>
            <li><a href="javascript:;">Sitemap</a></li>
          </ul>

          <div class="section-text mt-4 lg:mt-0">
            © 2022 The George Alexander Foundation. All rights reserved.
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
    <div class="bg-p2-900 py-8">
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
