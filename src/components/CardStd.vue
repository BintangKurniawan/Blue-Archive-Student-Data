<template>
  <q-card class="w-[225px]">
    <q-img
      :src="photoUrl"
      width="225px"
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
    page: String,
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
