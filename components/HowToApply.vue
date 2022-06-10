<template>
  <div
    class="how-to-apply bg-p1-700 my-6 flex flex-col relative md:flex-row xl:justify-center"
  >
    <div class="imgBox w-full md:order-2 2xl:hidden">
      <img src="/images/howToApply-image.jpg" alt="" class="w-full md:h-full" />
    </div>
    <div
      class="container flex flex-col items-start justify-start md:items-center md:justify-center 2xl:flex-row"
    >
      <div class="pt-8 pb-20 space-y-6 z-40 md:p-14 2xl:w-1/2">
        <h2 class="text-d5 font-medium text-p1-500 lg:text-d3">
          {{ title }}<span class="text-white">.</span>
        </h2>
        <p class="text-b4 font-light text-white lg:text-b3">
          {{ description }}
        </p>
        <Btn
          class="mt-3 md:text-b3"
          label="Learn More about How to Apply"
          color="s1"
          theme="link"
          size="md"
          arrow
        />
      </div>
      <div class="imgBox hidden aspect-square 2xl:block">
        <img src="/images/howToApply-image.jpg" alt="" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
.imgBox::after {
  content: "";
  background: linear-gradient(
    183.99deg,
    rgba(0, 74, 84, 0.6) 3.75%,
    rgba(0, 74, 84, 0) 58.56%
  );
  @apply absolute inset-0 rotate-180;
}
</style>
