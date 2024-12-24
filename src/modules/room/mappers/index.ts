import type { NewRoom } from "../types/NewRoom";

const RoomMappers = {
  fromRequest: (data: any): NewRoom => ({
    participant: data.participant,
    room: data.room,
  }),
};

export default RoomMappers;