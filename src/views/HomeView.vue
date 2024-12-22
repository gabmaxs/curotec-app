<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import pusher from '../pusher';
const BASE_API = 'http://127.0.0.1:8000/api';

const participantName = ref<string>('');

const submit = async () => {
  try {
    const request = await axios.post(`${BASE_API}/rooms`, JSON.stringify({
      participant_name: participantName.value,
    }), {
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
      }
    });

    console.log(request);

    const channel = pusher.subscribe('rooms');
    channel.bind('client-room_event', data => console.log(data));
    channel.trigger('client-room_event', {
      connected: true,
      roomId: request.data.room.id,
    })
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <main>
    <section>
      <form @submit.prevent="submit">
        <input type="text" name="participant_name" id="participant_name" v-model="participantName">
        <button type="submit">Join</button>
      </form>
    </section>
  </main>
</template>
