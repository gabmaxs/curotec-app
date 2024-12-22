<template>
  <Box>
    <RouterLink to="/create" class="link mb-1">Create a new room</RouterLink>
    <section class="input-section">
      <label for="roomId" class="label">Room ID:</label>
      <input type="text" name="roomId" id="roomId" class="input-text">
    </section>
    <section class="input-section">
      <label for="username" class="label">Username:</label>
      <input type="text" name="username" id="username" class="input-text">
    </section>
    <button type="submit" class="button btn-primary">Join</button>
  </Box>
</template>

<script setup lang="ts">
import Box from '../../components/Box.vue';
</script>