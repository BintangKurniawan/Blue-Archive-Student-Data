<template>
  <div v-for="items in paths" :key="items.path">
    <ItemsFrag :school="items.school" v-if="$route.path === items.path" />
  </div>
</template>

<script lang="ts">
import ItemsFrag from 'src/fragment/ItemsFrag.vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  components: { ItemsFrag },
  setup() {
    const paths = [
      {
        path: '/home',
        school: 'Home',
      },
      {
        path: '/abydos',
        school: 'Abydos',
      },
      {
        path: '/arius',
        school: 'Arius',
      },
      {
        path: '/gehenna',
        school: 'Gehenna',
      },
      {
        path: '/hyakkiyako',
        school: 'Hyakkiyako',
      },
      {
        path: '/millennium',
        school: 'Millennium',
      },
      {
        path: '/redwinter',
        school: 'Red Winter',
      },
      {
        path: '/shanhaijing',
        school: 'Shanhaijing',
      },
      {
        path: '/srt',
        school: 'SRT',
      },
      {
        path: '/trinity',
        school: 'Trinity',
      },
      {
        path: '/valkyrie',
        school: 'Valkyrie',
      },
    ];
    return { path: '', paths };
  },
  mounted() {
    const route = useRoute();
    let path = route.path;
    path = path.replace(/\//g, '');
    path = path.charAt(0).toUpperCase() + path.slice(1);
    this.path = path;
    console.log(this.path);
  },
};
</script>

<style lang="scss" scoped></style>
