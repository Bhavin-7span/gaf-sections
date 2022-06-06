<template comments>
  <section class="footer md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
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
        <Btn class="mt-3" label="Login" color="p1" theme="outline" size="md" />
        <Btn class="mt-3" label="Donate" color="p1" theme="solid" size="md" />
      </div>
    </div>
    <div class="footer__right py-16 lg:col-span-2">
      <div class="container">
        <div class="lg:grid lg:gap-6 lg:grid-cols-4">
          <!-- Col 1 -->
          <div class="mt-8 lg:mt-0">
            <FooterLinks title="How to Apply for a Grant" :links="[]" />
            <FooterLinks title="Funding Rounds" :links="[]" />
            <FooterLinks
              title="Grantees"
              :links="[
                'Welcome',
                'Acknowledging your Grant',
                'Communications Tips',
                'Reporting',
                'The Ian Potter Foundation Evaluation Pool',
              ]"
            />
          </div>

          <!-- Col 2 -->
          <div>
            <FooterLinks
              title="About"
              :links="[
                'Timeline & History',
                'About Sir Ian Potter',
                'People',
                'Reporting',
                'Donate',
              ]"
            />
          </div>

          <!-- COl 3 -->
          <div>
            <FooterLinks
              title="What We Support"
              :links="['Program Areas', 'Major Grants', 'Sub-Funds']"
            />
          </div>

          <div>
            <!-- Col 4 -->
            <FooterLinks
              title="Knowledge Centre"
              :links="[
                'Annual Reports',
                'Case Studies',
                'Grants Database',
                'Our Learnings',
                'Sustainable Development Goals',
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
