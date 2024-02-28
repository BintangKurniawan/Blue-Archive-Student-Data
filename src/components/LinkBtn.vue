<!-- just for ordinary component button -->

<script>
import { Icon } from '@iconify/vue';

import { useRouter, useRoute } from 'vue-router';
export default {
  setup() {
    return {
      route: useRoute(),
      router: useRouter(),
    };
  },
  components: { Icon },
  props: {
    title: String,
    link: String,
    icon: String,
    img: String,
    width: String,
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div
    @click="router.push(link)"
    :class="`relative group transition-all md:w-${width} w-${width} flex items-center gap-1 cursor-pointer pb-1 md:justify-start ${
      $route.path === link ? 'text-primary' : ''
    }`"
  >
    <span
      class="h-[2px] inline-block bg-primary absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
      :class="$route.path === link ? 'w-full' : 'w-0'"
      >&nbsp;</span
    >
    <div class="flex items-center gap-4">
      <Icon :icon="'mdi:' + icon" width="24" v-if="icon" />

      <q-img
        src="src/assets/img/Abydos_Icon.png"
        loading="lazy"
        alt="title"
        class="w-[40px] h-[33px]"
        fetchpriority="low"
      />
      <q-img
        :src="'src/assets/img/Blue_Archive_EN_logo.svg'"
        loading="lazy"
        alt="wgs"
        class="w-[130px] h-[29px]"
        fetchpriority="low"
      />
      <p class="capitalize text-sm">{{ title }}</p>
    </div>
  </div>
</template>
