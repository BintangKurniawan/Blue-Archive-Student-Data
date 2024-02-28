<template>
  <q-card class="w-[210px]">
    <q-img
      :src="photoUrl"
      width="210px"
      height="auto"
      class="cursor-pointer"
      @click="goToDetail(name, page)"
    >
      <div class="absolute-bottom">{{ name }}</div>
    </q-img>

    <q-card-section> {{ school }} </q-card-section>
  </q-card>
</template>

<script>
export default {
  setup() {
    return {};
  },

  props: {
    name: String,
    school: String,
    birthdate: String,
    photoUrl: String,
    imageSchool: String,
    damageType: String,
    page: Number,
  },
  methods: {
    goToDetail(name, page) {
      this.$router.push({
        path: `/detail/${name}`,
        query: {
          page: page,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
