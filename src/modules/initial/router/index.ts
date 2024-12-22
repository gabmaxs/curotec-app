import Initial from "../pages/Initial/Initial.vue";
import CreateRoom from "../views/CreateRoom/CreateRoom.vue";
import JoinRoom from "../views/JoinRoom/JoinRoom.vue";

const InitialRouter = [
  {
    path: '/',
    name: 'Initial',
    component: Initial,
    children: [
      {
        path: '',
        redirect: '/create'
      },
      {
        path: '/create',
        name: 'CreateRoom',
        component: CreateRoom,
      },
      {
        path: '/join',
        name: 'JoinRoom',
        component: JoinRoom,
      }
    ],
  }
];

export default InitialRouter;