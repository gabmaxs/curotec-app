<template>
  <Box>
    <RouterLink to="/create" class="link mb-1">Create a new room</RouterLink>
    <section class="input-section">
      <label for="roomId" class="label">Room ID:</label>
      <input type="text" name="roomId" id="roomId" class="input-text" v-model="roomId">
    </section>
    <section class="input-section">
      <label for="username" class="label">Username:</label>
      <input type="text" name="username" id="username" class="input-text" v-model="username">
    </section>
    <button type="submit" class="button btn-primary" @click="handleJoinButtonClick">
      <Loading v-if="isLoading" />
      <span v-else>Join</span>
    </button>
  </Box>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import JoinRoomUseCase from '@/modules/room/useCases/JoinRoom';
import { RoomRoutes } from '@/modules/room/router';
import Box from '../../components/Box.vue';
import Loading from '../../components/Loading.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref<boolean>(false);
const username = ref<string>("");
const roomId = ref<string>("");

const handleJoinButtonClick = async () => {
  if (isLoading.value)  return;

  if (!roomId.value) {
    alert('Room ID is required');
    return;
  }
  try {
    isLoading.value = true;
    const room = await JoinRoomUseCase.execute({
      username: username.value,
      roomId: roomId.value,
    });
    router.push({ name: RoomRoutes.ROOM, params: { id: room.room.id } });
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
}
</script>