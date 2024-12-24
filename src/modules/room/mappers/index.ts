import type { CreateRoom } from "../types/CreateRoom";
import type { NewRoom } from "../types/NewRoom";

export interface IRoomMappers {
  fromRequest(data: any): NewRoom;
  toRequest(data: any): CreateRoom;
}
class Room implements IRoomMappers{
  fromRequest(data: any): NewRoom {
    return {
      participant: data.participant,
      room: data.room,
    };
  }

  toRequest(data: any): CreateRoom {
    return {
      participant_name: data.username,
    };
  }
}

const RoomMappers = new Room();

export default RoomMappers;