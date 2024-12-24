import roomService from "../services/RoomService";
import type { IRoomService } from "../services/RoomService";
import type { CreateRoom } from "../types/CreateRoom";
import type { NewRoom } from "../types/NewRoom";

interface EnterNewRoomDependencies {
  roomService: IRoomService;
}

class EnterNewRoom {
  private roomService;

  constructor(dependencies: EnterNewRoomDependencies) {
    this.roomService = dependencies.roomService;
  }

  private logError(message: string) {
    console.error(`Error on EnterNewRoom useCase: ${message}`);
  }

  async execute(params: CreateRoom) {
    try {
      const newRoom: NewRoom = await this.roomService.create(params);
      console.log(newRoom);
    } catch (error: Error | any) {
      this.logError(error.message);
    }
  }
}

const EnterNewRoomUseCase = new EnterNewRoom({
  roomService
});

export default EnterNewRoomUseCase;