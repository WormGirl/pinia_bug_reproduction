<script setup lang="ts">
import { useDataStore } from '../stores/data.ts'
import { onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const dataState = useDataStore();
const init = () => {
  dataState.getDataList();
};
init();

onBeforeUnmount(() => {
  dataState.$reset();
});
</script>

<template>
  <button @click="router.back()">click to back</button>
  <p>This is Other page</p>
</template>