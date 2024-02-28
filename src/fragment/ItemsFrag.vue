<template>
  <div class="m-4">
    <div class="md:w-fit border-2 px-2">
      <q-input
        dense
        class="md:w-[160px]"
        v-model="search"
        debounce="700"
        clearable
        clear-icon="close"
        input-class="placeholder-color text-black"
        placeholder="Search"
        @update:model-value="searchQ(search)"
      >
        <template v-slot:append>
          <q-icon name="search" class="text-black" />
        </template>
      </q-input>
    </div>

    <div class="flex flex-wrap gap-3 mt-4 items-center w-full justify-center">
      <div v-for="item in data" :key="item.name">
        <CardStd
          :photoUrl="item.photoUrl"
          :name="item.name"
          :school="item.school"
          :page="Current"
        />
      </div>
    </div>

    <div class="row justify-center mt-5">
      <q-pagination
        v-if="data && data.length >= 10"
        v-model="Current"
        direction-links
        :boundary-numbers="false"
        :max="100"
        boundary-links
        :max-pages="5"
        @update:model-value="paginate()"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import CardStd from 'src/components/CardStd.vue';
export default {
  setup() {
    return { Current: ref(1) };
  },
  data() {
    return {
      search: ''.toUpperCase(),
      data: [],
      pagination: {
        rowsPerPage: 10,
        page: 1,
        rowsNumber: 0,
      },
      sc: '',
    };
  },
  mounted() {
    const curr = this.$route.query.page || 1;
    const sQ = this.$route.query.search || '';
    this.search = sQ;
    console.log(sQ);
    let sch = this.$route.path;
    sch = sch.replace(/\//g, '');
    sch = sch.charAt(0).toUpperCase() + sch.slice(1);
    this.sc = sch;
    console.log(this.sc);
    this.Current = parseInt(curr);
    this.getData(curr, sQ);
  },
  props: {
    school: String,
  },
  methods: {
    paginate() {
      this.$router.push({ query: { page: this.Current } });
      this.getData(this.Current, this.search);
    },
    searchQ(search) {
      this.$router.push({ query: { search: this.search } });
      this.Current = 1;
      this.getData(this.Current, search);
    },
    async getData(current, search) {
      let newSearch;
      if (search === null) {
        newSearch = '';
      } else {
        newSearch = search;
      }
      if (this.school === 'Home') {
        await axios
          .get(
            `https://api-blue-archive.vercel.app/api/characters?page=${current}&perPage=10&name=${newSearch}`
          )
          .then((res) => {
            console.log(res);
            this.data = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (this.school != 'Home') {
        await axios
          .get(
            `https://api-blue-archive.vercel.app/api/characters?school=${this.school}&page=${current}&perPage=10&name=${newSearch}`
          )
          .then((res) => {
            console.log(res);
            this.data = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  components: { CardStd },
};
</script>

<style lang="scss" scoped></style>
