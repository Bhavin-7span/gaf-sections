<template>
  <section
    class="section-community bg-p1-700 pt-7 pb-12 relative overflow-hidden lg:pb-20"
  >
    <div class="community-images">
      <img
        class="img-top-left img-xl mt-10"
        src="/images/community-1.jpg"
        alt=""
      />
      <img
        class="img-top-center img-sm mx-auto mt-5 lg:-mt-8 xl:mt-5"
        src="/images/community-2.jpg"
        alt=""
      />
      <img
        class="img-top-right img-sm mr-0 ml-auto lg:ml-10 xl:ml-40"
        src="/images/community-3.jpg"
        alt=""
      />
    </div>
    <div class="container">
      <div class="text-center max-w-sm mx-auto mt-6 xl:max-w-lg">
        <h2 class="text-p1-500 text-b1 xl:text-d3">Our Community</h2>
        <p class="text-p1-500 font-light my-8 text-b4 xl:text-b3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry dummy text ever since.
        </p>
        <Btn
          class="w-full sm:w-auto"
          label="Call to action"
          color="p1-dark"
          theme="solid"
          size="md"
        />
        <div class="space-x-5 flex items-center justify-center mt-10 xl:mt-20">
          <a href="javascript:;">
            <img src="/icons/fb-lime-green.svg" alt="" />
          </a>
          <a href="javascript:;">
            <img src="/icons/youtube-lime-green.svg" alt="" />
          </a>
          <a href="javascript:;">
            <img src="/icons/insta-lime-green.svg" alt="" />
          </a>
          <a href="javascript:;">
            <img src="/icons/linkedin-lime-green.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="community-images-bottom hidden md:block">
      <img
        class="img-center-right img-lg"
        src="/images/community-4.jpg"
        alt=""
      />
      <img
        class="img-bottom-left img-2xl mx-auto"
        src="/images/community-5.jpg"
        alt=""
      />
      <img
        class="img-bottom-right img-md mr-0 ml-auto"
        src="/images/community-6.jpg"
        alt=""
      />
    </div>
  </section>
</template>
