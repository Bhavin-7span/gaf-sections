<template>
  <div class="bg-p1-500 py-4 md:p-10 lg:py-16">
    <div class="container">
      <div
        class="boxShadow bg-p1-700 h-full flex flex-col items-center rounded-xl overflow-hidden md:flex-row md:items-stretch"
      >
        <div class="md:hidden">
          <img src="/images/honourRoll-image.jpg" alt="" />
        </div>
        <div
          class="p-6 flex flex-col items-center justify-center gap-8 md:w-4/5 xl:w-1/2 md:pl-14 md:py-10 md:items-start"
        >
          <div class="py-5 font-body space-y-4">
            <p class="text-b6 font-normal w-3/5 text-g1-200 uppercase">
              {{ text }}
            </p>
            <h2 class="text-d5 font-medium text-g1-100 lg:text-d3">
              {{ title }}<span class="text-p1-500">.</span>
            </h2>
            <p class="text-b4 text-g1-50 font-light lg:text-b3">
              {{ content }}
            </p>
          </div>
          <Btn
            label="View Honour Role"
            color="p1 w-full sm:w-auto"
            theme="solid"
            size="md"
          />
        </div>
        <div class="hidden md:block xl:w-1/2">
          <img
            src="/images/honourRoll-image.jpg"
            alt=""
            class="w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
    content: String,
    btnText: String,
  },
};
</script>

<style scoped>
.boxShadow {
  filter: drop-shadow(-1px 6px 15px rgba(42, 54, 88, 0.3));
}
</style>
