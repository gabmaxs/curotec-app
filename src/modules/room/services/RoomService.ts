import axios, { type AxiosResponse } from "axios";
import type { CreateRoom } from "../types/CreateRoom";
import RoomMappers from "../mappers";
import type { NewRoom } from "../types/NewRoom";

export interface IRoomService {
  create(params: CreateRoom): Promise<NewRoom>
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

  public async create(params: CreateRoom): Promise<NewRoom> {
    return this.client.post(this.resource, JSON.stringify(params))
      .then((response: AxiosResponse) => RoomMappers.fromRequest(response.data));
  }
}

const RoomService = new Room();

export default RoomService;