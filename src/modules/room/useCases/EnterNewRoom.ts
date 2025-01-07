import EchoInstance from "@/echo";
import RoomMappers from "../mappers";
import type { IRoomMappers } from "../mappers";
import RoomService from "../services/RoomService";
import type { IRoomService } from "../services/RoomService";
import type { IRoom } from "../types/Room";

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

  async execute(username: string): Promise<IRoom> {
    try {
      const newRoom: IRoom = await this.roomService.create(this.roomMappers.toRequest({ username }));
      console.log(newRoom);
      // validar dados
      // chamar API
      // pegar o id do room
      // criar subscribe do websocket (talvez um outro useCase)
      // navegar para a pagina
      EchoInstance.private(`room.${newRoom.room.id}`).listen('newMemberEnter', (data: unknown) => {
        console.log('newMemberEnter');
        console.log(data);
      });
      return newRoom;
    } catch (error: Error | any) {
      this.logError(error.message);
      throw Error(error.message);
    }
  }
}

const EnterNewRoomUseCase = new EnterNewRoom({
  roomService: RoomService,
  roomMappers: RoomMappers,
});

export default EnterNewRoomUseCase;