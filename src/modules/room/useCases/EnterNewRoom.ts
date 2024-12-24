import RoomMappers from "../mappers";
import type { IRoomMappers } from "../mappers";
import RoomService from "../services/RoomService";
import type { IRoomService } from "../services/RoomService";
import type { NewRoom } from "../types/NewRoom";

interface EnterNewRoomDependencies {
  roomService: IRoomService;
  roomMappers: IRoomMappers;
}

class EnterNewRoom {
  private roomService: IRoomService;
  private roomMappers: IRoomMappers;

  constructor(dependencies: EnterNewRoomDependencies) {
    this.roomService = dependencies.roomService;
    this.roomMappers = dependencies.roomMappers;
  }

  private logError(message: string) {
    console.error(`Error on EnterNewRoom useCase: ${message}`);
  }

  async execute(username: string) {
    try {
      const newRoom: NewRoom = await this.roomService.create(this.roomMappers.toRequest({ username }));
      console.log(newRoom);
    } catch (error: Error | any) {
      this.logError(error.message);
    }
  }
}

const EnterNewRoomUseCase = new EnterNewRoom({
  roomService: RoomService,
  roomMappers: RoomMappers,
});

export default EnterNewRoomUseCase;