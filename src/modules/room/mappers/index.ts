import type { CreateRoom } from "../types/CreateRoom";
import type { IRoom } from "../types/Room";

export interface IRoomMappers {
  fromRequest(data: any): IRoom;
  toRequest(data: any): CreateRoom;
}
class Room implements IRoomMappers{
  fromRequest(data: any): IRoom {
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