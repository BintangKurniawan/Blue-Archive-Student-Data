<template>
  <div>abydos</div>
</template>

<script>
import { useCounterStore } from 'src/stores/example-store';
export default {
  setup() {
    const store = useCounterStore();
    return {
      ct: store.doubleCount,
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
