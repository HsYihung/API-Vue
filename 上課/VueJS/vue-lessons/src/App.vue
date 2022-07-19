<script>
import store from "./store";

export default {
  store,
  methods: {
    addCount() {
      this.$store.commit("addStoreCount");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>



<template>
  <div>
    <button @click="addCount">Add</button>
    <h2>{{ count }}</h2>
  </div>
</template>
