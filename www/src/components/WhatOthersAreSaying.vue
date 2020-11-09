<template>
    <div class="mb-40">
        <h2 class="inline-block bg-gradient-to-r from-aqua to-blue rounded text-white font-black font-sans text-3xl py-2 px-3 mb-8">What others are saying...</h2>
        <p class="leading-loose text-lg md:text-xl text-gray-800 mb-16">...I mean, they might have said it. I can't say for certain that they did, but I also can't say for certain that they didn't. That has to count for something, right?</p>
        <div class="relative inline-block transform rotate-1 text-blue text-lg md:text-xl ml-3 mb-16">
            <BigQuote />
            <p class="mb-2">An absolute freak athlete. Mike is on another level.</p>
            <div class="text-right">- LeBron James</div>
        </div>
        <div class="flex justify-end mb-16">
            <div class="relative transform -rotate-2 text-hot-pink text-lg md:text-xl md:w-2/3 md:mr-12">
                <BigQuote />
                <p class="mb-2">Mike writes the most elegant JavaScript I have ever seen. If you’re looking for the pinnacle of web development talent, look no further.</p>
                <div class="text-right">- Mark Zuckerberg</div>
            </div>
        </div>
        <div class="relative text-gray-700 text-lg md:text-xl md:ml-16 md:w-1/2 mb-16">
            <BigQuote />
            <p class="mb-2">Unbelievably handsome. I mean, have you seen this guy? Just... wow.</p>
            <div class="text-right">- Ryan Reynolds</div>
        </div>
        <div class="relative transform -rotate-3 text-purple text-lg md:text-xl ml-12 md:mx-auto w-2/3 md:w-2/5 mb-16">
            <BigQuote />
            <p class="mb-2">Nice guy. Moderately funny.</p>
            <div class="text-right md:mr-8">- My wife</div>
        </div>
    </div>
</template>

<script>
import BigQuote from '@/components/BigQuote'
export default {
    name: 'WhatOthersAreSaying',
    components: {
      BigQuote,
    },
}
</script>
