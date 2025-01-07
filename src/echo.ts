import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from "pusher-js";

window.Pusher = Pusher;

const EchoInstance = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_CLUSTER,
  // authEndpoint: `http://localhost:8000/broadcasting/auth`,
  forceTLS: true,
  authorizer: (channel, options) => {
    return {
        authorize: (socketId, callback) => {
            axios.post('http://localhost:8000/broadcasting/auth', {
                socket_id: socketId,
                channel_name: channel.name,
            })
            .then(response => {
                callback(false, response.data);
            })
            .catch(error => {
                callback(true, error);
            });
        }
    };
}
});

export default EchoInstance;
