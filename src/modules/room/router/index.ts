import Room from "../pages/Room/Room.vue";

export enum RoomRoutes {
  ROOM = 'Room',
}

const RoomRouter = [
  {
    path: '/room/:id',
    name: RoomRoutes.ROOM,
    component: Room,
  }
];

export default RoomRouter;