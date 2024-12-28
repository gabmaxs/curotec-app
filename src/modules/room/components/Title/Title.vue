<template>
  <div id="title">
    <h2 v-if="!isEdit" @dblclick="handleEditChangeEvent(true)" class="text">{{ model }}</h2>
    <input
      v-else
      v-model="model"
      @blur="handleEditChangeEvent(false)"
      @keyup.enter="handleEditChangeEvent(false)"
      type="text"
      class="input-text"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const model = defineModel({ required: true });
const isEdit = ref<boolean>(false);

const handleEditChangeEvent = (value: boolean) => isEdit.value = value;
</script>

<style scoped>
.text {
  @apply cursor-pointer text-xl font-bold;
}
.input-text {
  @apply bg-transparent border border-gray-300;
}
</style>