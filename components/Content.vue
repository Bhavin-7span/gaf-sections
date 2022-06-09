<template>
  <section class="container">
      <div class="font-body flex flex-col items-start justify-start md:items-center md:justify-center">
          <div v-for="(data, index) in contents" :key="index" class="space-y-4 py-6 md:w-1/2">
              <h2 class="text-d6 text-p2-300 sm:text-b2">{{data.title}}</h2>
                <div class="text-b4 text-p2-500 font-light font-body" v-for="(paragraph, index) in data.content" :key="index">
                    <p>{{paragraph}}</p>
                </div>
          </div>
      </div>
  </section>
</template>

<script>
import contents from '@/data/content';

export default {
    data () {
        return {
            contents
        }
    },
}
</script>
