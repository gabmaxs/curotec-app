<template>
  <form id="box">
    <RouterLink to="/create">Create a new room</RouterLink>
    <section class="input-section">
      <label for="roomId" class="label">Room ID:</label>
      <input type="text" name="roomId" id="roomId" class="input-text">
    </section>
    <section class="input-section">
      <label for="username" class="label">Username:</label>
      <input type="text" name="username" id="username" class="input-text">
    </section>
    <button type="submit" class="button btn-primary">Join</button>
  </form>
</template>

<script setup lang="ts">
</script>

<style scoped>
#box {
  width: 300px;
  @apply flex flex-col h-auto gap-2 bg-neutral-300 rounded-lg p-5 text-black justify-between;
}

.input-section {
  @apply flex flex-col;
}
.label {
  @apply text-slate-900 text-sm font-medium;
}
.input-text {
  @apply rounded-lg border-2 border-blue-800 py-1 px-3 leading-5 shadow-sm focus:outline-none;
}
.button {
  @apply rounded-md border border-slate-300 px-4 py-2 font-semibold text-sm text-slate-300 shadow-sm focus:outline-none;
}
.btn-primary {
  @apply bg-blue-500 hover:border-blue-50;
}
</style>