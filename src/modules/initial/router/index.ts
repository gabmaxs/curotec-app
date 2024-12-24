import Initial from "../pages/Initial/Initial.vue";
import CreateRoom from "../views/CreateRoom/CreateRoom.vue";
import JoinRoom from "../views/JoinRoom/JoinRoom.vue";

export enum InitialRoutes {
  INITIAL = 'initial',
  CREATE_ROOM = 'createRoom',
  JOIN_ROOM = 'joinRoom',
}

const InitialRouter = [
  {
    path: '/',
    name: InitialRoutes.INITIAL,
    component: Initial,
    children: [
      {
        path: '',
        redirect: '/create'
      },
      {
        path: '/create',
        name: InitialRoutes.CREATE_ROOM,
        component: CreateRoom,
      },
      {
        path: '/join',
        name: InitialRoutes.JOIN_ROOM,
        component: JoinRoom,
      }
    ],
  }
];

export default InitialRouter;