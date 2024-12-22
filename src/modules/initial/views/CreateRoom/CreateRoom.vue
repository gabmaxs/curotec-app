<template>
  <Box>
    <RouterLink to="/join" class="link mb-1">Join an existent room</RouterLink>
    <section class="input-section">
      <label for="username" class="label">Username:</label>
      <input type="text" name="username" id="username" class="input-text">
    </section>
    <button type="submit" class="button btn-primary">Create</button>
  </Box>
</template>

<script setup lang="ts">
import Box from '../../components/Box.vue';
</script>