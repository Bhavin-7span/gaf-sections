<template>
    <section class="container">
        <div v-for="(detail, index) in details" :key="index" class="flex flex-col items-center justify-center">
            <div class="md:w-1/2 space-y-4 text-center text-p2-300 py-8 border-b border-g1-100">
                <h1 class="text-d6 lg:text-d4 font-medium">{{detail.title}}</h1>
                <p class="text-b4 font-normal">{{detail.description}}</p>
            </div>
            <div class="py-8 sm:w-3/4">
                <div class="grid gap-6 lg:gap-8" :class="detail.isColumn === true ? 'lg:grid-cols-3' : 'lg:grid-cols-2'">
                    <div v-for="(question, index) in detail.questions" :key="index" class="space-y-2">
                        <h2 class="text-p2-300 font-medium lg:text-b3">{{question.query}}</h2>
                        <p class="text-p2-500 font-normal">{{question.answer}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import details from '@/data/details';

export default {
    data() {
        return {
            details
        }
    },
}
</script>
