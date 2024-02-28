<script lang="ts">
import { Icon } from '@iconify/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import LinkBtn from 'src/components/LinkBtn.vue';

export default {
  setup() {
    const page = window.innerWidth >= 1280 ? true : false;
    const leftDrawerOpen = ref(page);
    const data = [
      {
        title: 'Home',
        link: '/home',
        icon: 'home',
      },
      {
        title: 'Abydos',
        link: '/abydos',
        img: 'Abydos_Icon.png',
      },
      {
        title: 'Arius',
        link: '/arius',
        img: 'ARIUS_Icon.png',
      },
      {
        title: 'Gehenna',
        link: '/gehenna',
        img: 'Gehenna_Icon.png',
      },
      {
        title: 'Hyakkiyako',
        link: '/hyakkiyako',
        img: 'Hyakkiyako_Icon.png',
      },
      {
        title: 'Millennium',
        link: '/millennium',
        img: 'Millennium_Icon.png',
      },
      {
        title: 'Red Winter',
        link: '/redwinter',
        img: 'Red_Winter_Icon.png',
      },
      {
        title: 'Shanhaijing',
        link: '/shanhaijing',
        img: 'Shanhaijing_Icon.png',
      },
      {
        title: 'SRT',
        link: '/srt',
        img: 'SRT_Icon.png',
      },
      {
        title: 'Trinity',
        link: '/trinity',
        img: 'Trinity_Icon.png',
      },
      {
        title: 'Valkyrie',
        link: '/valkyrie',
        img: 'Valkyrie_Icon.png',
      },
    ];
    return {
      route: useRoute(),
      router: useRouter(),
      leftDrawerOpen,
      data,
    };
  },
  data() {
    return {};
  },
  mounted() {
    console.log(location.hostname);

    console.log(this.leftDrawerOpen);
  },
  methods: {},
  components: {
    Icon,
    LinkBtn,
  },
};
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white text-black" bordered>
      <q-toolbar class="flex items-center justify-between">
        <q-img
          src="../assets/img/Blue_Archive_EN_logo.svg"
          loading="lazy"
          alt="wgs"
          class="w-[130px] h-[29px]"
          fetchpriority="low"
        />

        <h1 class="font-normal text-3xl">ようこそ !</h1>
        <div class="lg:hidden">
          <q-btn dense flat class="" @click="leftDrawerOpen = !leftDrawerOpen">
            <Icon icon="mdi:menu" width="24" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
      </q-list>
    </q-drawer> -->

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="200"
      class="p-5 flex flex-col justify-between"
    >
      <div class="flex flex-col md:items-start gap-4">
        <div v-for="item in data" :key="item.title" class="w-full">
          <LinkBtn
            :title="item.title"
            :link="item.link"
            :img="item.img"
            :icon="item.icon"
            width="full"
          />
        </div>
      </div>

      <div class=""></div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@media (max-width: 768px) {
  .hid {
    display: none;
  }
}
</style>
