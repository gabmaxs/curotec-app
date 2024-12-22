import Initial from "../pages/Initial/Initial.vue";
import CreateRoom from "../views/CreateRoom/CreateRoom.vue";

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
      }
    ],
  }
];

export default InitialRouter;