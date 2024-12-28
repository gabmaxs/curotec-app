<template>
  <div id="actions">
    <slot></slot>
    <button class="button btn-success btn-small">
      Save
    </button>
    <button class="button btn-danger btn-small">
      Exit
    </button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#actions {
  @apply flex items-center gap-2;
}
</style>