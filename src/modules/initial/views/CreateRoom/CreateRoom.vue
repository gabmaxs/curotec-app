<template>
  <Box>
    <RouterLink to="/join" class="link mb-1">Join an existent room</RouterLink>
    <section class="input-section">
      <label for="username" class="label">Username:</label>
      <input type="text" name="username" id="username" class="input-text" v-model="username">
    </section>
    <button class="button btn-primary" @click="handleCreateButtonClick">
      <Loading v-if="isLoading" />
      <span v-else>Create</span>
    </button>
  </Box>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EnterNewRoomUseCase from '@/modules/room/useCases/EnterNewRoom';
import { RoomRoutes } from '@/modules/room/router';
import Box from '../../components/Box.vue';
import Loading from '../../components/Loading.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref<boolean>(false);
const username = ref<string>("");

const handleCreateButtonClick = async () => {
  if (isLoading.value)  return;
  try {
    isLoading.value = true;
    const room = await EnterNewRoomUseCase.execute(username.value);
    router.push({ name: RoomRoutes.ROOM, params: { id: room.room.id } });
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}
</script>