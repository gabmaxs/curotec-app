import axios, { type AxiosResponse } from "axios";
import type { CreateRoom } from "../types/CreateRoom";
import RoomMappers from "../mappers";
import type { IRoom } from "../types/Room";

export interface IRoomService {
  create(params: CreateRoom): Promise<IRoom>
  joinRoom(idRoom: string, params: CreateRoom): Promise<unknown>
}

class Room implements IRoomService {
  private client;
  private resource;

  constructor() {
    this.resource = '/rooms';
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });
  }

  public async create(params: CreateRoom): Promise<IRoom> {
    return this.client.post(this.resource, JSON.stringify(params))
      .then((response: AxiosResponse) => RoomMappers.fromRequest(response.data));
  }

  public async joinRoom(idRoom: string, params: CreateRoom): Promise<IRoom> {
    return this.client.post(`${this.resource}/${idRoom}/join`, JSON.stringify(params))
      .then((response: AxiosResponse) => RoomMappers.fromRequest(response.data));
  }
}

const RoomService = new Room();

export default RoomService;