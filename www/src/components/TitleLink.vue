<template>
    <div class="relative z-10 group inline-block mb-4 -ml-4">
        <a v-if="isExternal" :href="to" class="font-sans font-bold inline-block bg-white rounded px-4 py-2 text-xl md:text-2xl shadow md:shadow-none hover:shadow" v-bind="$attrs">
            <slot></slot>
        </a>
        <g-link v-else :to="to" class="font-sans font-bold inline-block bg-white rounded px-4 py-2 text-xl md:text-2xl shadow md:shadow-none hover:shadow" v-bind="$attrs">
            <slot></slot>
        </g-link>
        <span class="-z-1 absolute inset-0 rounded transition-transform ease-linear duration-75 transform -rotate-3 md:rotate-0 group-hover:-rotate-3 bg-gradient-to-r from-aqua to-blue"></span>
    </div>
</template>

<script>
export default {
    name: 'TitleLink',
    props: {
      to: {
        type: String,
        required: true
      },
      isExternal: {
          type: Boolean,
          default: true
      }
    },
}
</script>
