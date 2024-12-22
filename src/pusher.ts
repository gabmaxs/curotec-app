import Pusher from "pusher-js";

const pusher = new Pusher('72be54adc09d3c5f95a5', { cluster: 'sa1' });

export default pusher;