import EchoInstance from "@/echo";
import RoomMappers from "../mappers";
import type { IRoomMappers } from "../mappers";
import RoomService from "../services/RoomService";
import type { IRoomService } from "../services/RoomService";
import type { IRoom } from "../types/Room";

interface JoinRoomDependencies {
  roomService: IRoomService;
  roomMappers: IRoomMappers;
}

class JoinRoom {
  private roomService: IRoomService;
  private roomMappers: IRoomMappers;

  constructor(dependencies: JoinRoomDependencies) {
    this.roomService = dependencies.roomService;
    this.roomMappers = dependencies.roomMappers;
  }

  private logError(message: string) {
    console.error(`Error on JoinRoom useCase: ${message}`);
  }

  async execute({ roomId, username }): Promise<IRoom> {
    try {
      const joinedRoom: IRoom = await this.roomService.joinRoom(roomId, this.roomMappers.toRequest({ username }));
      console.log(joinedRoom);
      EchoInstance.private(`room.${joinedRoom.room.id}`).whisper('newMemberEnter', {
        member: joinedRoom.participant
      });

      return joinedRoom;
    } catch (error: Error | any) {
      this.logError(error.message);
      throw Error(error.message);
    }
  }
}

const JoinRoomUseCase = new JoinRoom({
  roomService: RoomService,
  roomMappers: RoomMappers,
});

export default JoinRoomUseCase;