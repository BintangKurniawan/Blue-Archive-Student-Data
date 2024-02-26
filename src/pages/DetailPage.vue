<template>
  <div
    class="w-full p-6 flex flex-row gap-6 bg-black md:h-[116px] h-[204px] items-center md:items-start justify-center md:justify-normal"
  >
    <div
      class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-[204px] before:bg-primary"
    >
      <img
        :src="img"
        alt=""
        class="absolute z-10 inset-0 w-full h-[204px] object-cover"
        loading="lazy"
      />
    </div>

    <!-- <q-img
        src="https://static.miraheze.org/bluearchivewiki/thumb/8/86/Azusa.png/266px-Azusa.png"
        width="192px"
        height="204px"
      /> -->

    <div
      class="flex flex-wrap flex-col items-start md:items-start md:justify-start justify-center mt-40 md:mt-0 gap-3"
    >
      <h1
        class="md:text-start text-center w-full flex-none mb-2 text-2xl font-semibold md:text-white"
      >
        {{ fName }} {{ lName }}
      </h1>
      <h1 class="text-xl md:text-white text-center w-full md:text-start">
        {{ jpFName }}
        <span class="uppercase text-teal-400">{{ jpLName }}</span>
      </h1>
      <div class="flex gap-3 flex-col md:flex-row">
        <div>
          <div class="border-b-2 border-primary w-fit font-bold mb-1">
            Background:
          </div>
          <p class="w-[300px]">
            {{ background }}
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                School:
              </div>
              <p>{{ school }}</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Age:
              </div>
              <p>{{ age }} y.o</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Birthday:
              </div>
              <p>{{ birthday }}</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Height:
              </div>
              <p>{{ height }}</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Voice:
              </div>
              <p>{{ voice }}</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Damage Type:
              </div>
              <p>{{ damageType }}</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Armor Type:
              </div>
              <p>{{ armorType }}</p>
            </div>
          </div>

          <div>
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Weapon:
              </div>
              <p>{{ weapon }}</p>
              <q-img :src="wpImg" />
            </div>
          </div>

          <div class="mt-3">
            <div class="flex gap-1">
              <div class="border-b-2 border-primary w-fit font-bold mb-1">
                Release Date:
              </div>
              <p>{{ releaseDate }}</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div class="border-b-2 border-primary w-fit font-bold mb-1">
            Affinity:
          </div>

          <div class="flex flex-row gap-2">
            <div class="flex gap-2 flex-row">
              <q-img :src="urban1" alt="urban" width="24px" />
              <q-img :src="emo1" alt="emotion" width="24px" />
            </div>
            <div class="flex gap-2 flex-row">
              <q-img :src="outdoors" alt="outdoors" width="24px" />
              <q-img :src="emo2" alt="emotion" width="24px" />
            </div>
            <div class="flex gap-2 flex-row">
              <q-img :src="indoors" alt="indoors" width="24px" />
              <q-img :src="emo3" alt="emotion" width="24px" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-wrap flex-col px-12 items-start md:items-start justify-start md:mt-0 gap-3 w-full hid"
    ></div>
  </div>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      fab
      label="Back"
      color="primary"
      @click="$router.push(`/home?page=${peg}`)"
    />
  </q-page-sticky>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<script lang="ts">
import axios from 'axios';
import { ref } from 'vue';
export default {
  setup() {
    return {
      peg: '',
    };
  },
  mounted() {
    const name = this.$router.currentRoute.value.params.name;
    const page = this.$route.query.page || 1;
    this.peg = page;
    this.getData(name);
  },

  data() {
    return {
      img: '',
      fName: '',
      lName: '',
      jpFName: '',
      jpLName: '',
      background: '',
      school: '',
      age: '',
      birthday: '',
      height: '',
      voice: '',
      weapon: '',
      wpImg: '',
      damageType: '',
      armorType: '',
      releaseDate: '',
      urban1: '',
      emo1: '',
      outdoors: '',
      emo2: '',
      indoors: '',
      emo3: '',
    };
  },
  methods: {
    async getData(name: any) {
      await axios
        .get(
          `https://api-blue-archive.vercel.app/api/characters/students?name=${name}`
        )
        .then((res) => {
          console.log(res);
          this.img = res.data.data[0].photoUrl;
          this.fName = res.data.data[0].names.firstName;
          this.lName = res.data.data[0].names.lastName;
          let separatedName = res.data.data[0].names.japanName;
          let sepName = separatedName.split(' ');
          this.jpFName = sepName[1];
          this.jpLName = sepName[2];
          this.background = res.data.data[0].background;
          this.school = res.data.data[0].school;
          this.age = res.data.data[0].age;
          this.birthday = res.data.data[0].birthday;
          this.height = res.data.data[0].height;
          this.voice = res.data.data[0].voice;
          this.weapon = res.data.data[0].weapon;
          this.wpImg = res.data.data[0].weaponImage;
          this.damageType = res.data.data[0].damageType;
          this.armorType = res.data.data[0].armorType;
          this.releaseDate = res.data.data[0].realeaseDate;
          this.urban1 = res.data.data[0].affinity[0].urban;
          this.emo1 = res.data.data[0].affinity[0].urbanEmotion;
          this.outdoors = res.data.data[0].affinity[1].outdoors;
          this.emo2 = res.data.data[0].affinity[1].outdoorsEmotion;
          this.indoors = res.data.data[0].affinity[2].indoors;
          this.emo3 = res.data.data[0].affinity[2].indoorsEmotion;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .hid {
    display: none;
  }
}
</style>
