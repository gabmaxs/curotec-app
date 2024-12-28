<template>
  <section class="h-screen flex flex-col justify-start">
    <nav class="w-full h-auto p-2 flex justify-between border-b border-gray-500">
      <Title v-model="pageTitle" />
      <Actions />
    </nav>
    <section class="w-full p-2 flex-1">
      Body
    </section>
    <footer class="flex justify-end border-t border-gray-500">
      <span class="text-xs">last update: YYYY-MM-DD HH:mm:ss</span>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Title from '../../components/Title/Title.vue';
import Actions from '../../components/Actions/Actions.vue';

const pageTitle = ref<string>('New File');
</script>