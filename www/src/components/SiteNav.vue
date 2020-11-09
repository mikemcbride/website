<template lang="html">
    <HorizontalPad>
        <nav class="pt-6 sm:pt-12 mb-12 flex flex-col items-center justify-between md:flex-row text-base">
            <div class="inline-block relative z-10 group transform -rotate-1">
                <g-link to="/" class="inline-block font-sans font-black text-white bg-blue py-2 px-4 transform -rotate-1 md:rotate-0 group-hover:-rotate-2 transition-transform duration-100 ease-linear uppercase text-4xl rounded-md shadow-md">Mike McBride</g-link>
                <div class="absolute inset-0 bg-gradient-to-r from-hot-pink to-purple transform rotate-3 md:rotate-0 group-hover:rotate-2 transition-transform duration-100 ease-linear rounded-md -z-1"></div>
            </div>
            <div class="flex items-center mt-12 md:mt-0">
                <NavLink :index="0" to="/" :active="$route.path === '/'" title="About" />
                <NavLink :index="1" to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
                <NavLink :index="2" to="/writing" :active="$route.path.startsWith('/writing')" title="Writing" />
                <NavLink :index="3" to="/uses" :active="$route.path.startsWith('/uses')" title="Uses" />
            </div>
        </nav>
    </HorizontalPad>
</template>

<script>
import NavLink from "@/components/NavLink";
import HorizontalPad from '@/components/HorizontalPad'

export default {
  name: "SiteNav",
  components: {
    NavLink,
    HorizontalPad
  },
};
</script>
