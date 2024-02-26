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
      >
        <template v-slot:append>
          <q-icon name="search" class="text-black" />
        </template>
      </q-input>
    </div>

    <div class="flex flex-wrap gap-3 mt-4">
      <div v-for="item in data" :key="item.name">
        <CardStd
          :photoUrl="item.photoUrl"
          :name="item.name"
          :school="item.school"
          :page="Current"
        />
      </div>
    </div>

    <div class="row justify-center">
      <q-pagination
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
      search: ref(''),
      data: [],
      pagination: {
        rowsPerPage: 10,
        page: 1,
        rowsNumber: 0,
      },
    };
  },
  mounted() {
    const curr = this.$route.query.page || 1;
    this.Current = parseInt(curr);
    this.getData(curr);
  },
  methods: {
    paginate() {
      this.$router.push({ query: { page: this.current } });
      this.getData(this.Current);
    },
    async getData(current) {
      await axios
        .get(
          `https://api-blue-archive.vercel.app/api/characters?page=${current}&perPage=10`
        )
        .then((res) => {
          console.log(res);
          this.data = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { CardStd },
};
</script>

<style lang="scss" scoped></style>
