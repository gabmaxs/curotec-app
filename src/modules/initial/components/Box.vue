<template>
  <div id="box">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#box {
  width: 300px;
  @apply flex flex-col h-auto gap-2 bg-neutral-300 rounded-lg p-5 text-black justify-between items-start;
}
</style>