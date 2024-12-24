<template>
  <Box>
    <RouterLink to="/join" class="link mb-1">Join an existent room</RouterLink>
    <section class="input-section">
      <label for="username" class="label">Username:</label>
      <input type="text" name="username" id="username" class="input-text">
    </section>
    <button class="button btn-primary" @click="handleCreateButtonClick">
      <Loading v-if="isLoading" />
      <span v-else>Create</span>
    </button>
  </Box>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Box from '../../components/Box.vue';
import Loading from '../../components/Loading.vue';

const isLoading = ref<boolean>(false);

const handleCreateButtonClick = async () => {
  if (isLoading.value)  return;
  try {
    isLoading.value = true;
    
  } catch (error) {

  } finally {
    isLoading.value = false;
  }
}
</script>