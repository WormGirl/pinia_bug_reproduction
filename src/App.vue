<script setup lang="ts">
import { useDataStore } from './stores/data.ts'
import { toRefs } from 'vue'

const dataState = useDataStore();
const {filterData} = toRefs(dataState);
</script>

<template>
  <div>
    {{  filterData }}
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
