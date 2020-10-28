<template lang="html">
    <HorizontalPad>
        <nav class="pt-6 sm:pt-12 mb-8 sm:mb-12 flex flex-col items-center justify-between md:flex-row text-base">
            <g-link to="/" class="inline-block font-sans font-black text-white bg-blue hover:bg-hot-pink py-2 px-4 transform -rotate-1 uppercase text-4xl">Mike McBride</g-link>
            <div class="flex items-center mt-12 md:mt-0">
                <NavLink :index="0" to="/" :active="$route.path === '/'" title="About" />
                <NavLink :index="1" to="/projects" :active="$route.path.startsWith('/projects')" title="Projects" />
                <NavLink :index="2" to="/blog" :active="$route.path.startsWith('/blog')" title="Blog" />
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
