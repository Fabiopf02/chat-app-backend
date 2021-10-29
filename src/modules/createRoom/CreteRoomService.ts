import { Room } from '@entities/Room';
import { IRoomsRepository } from '@repositories/IRoomsRepositories';
import { ICreateRoomRequestDTO } from './CreateRoomDTO';

export class CreateRoomService {
  constructor(private roomsRepository: IRoomsRepository) {}

  async execute(data: ICreateRoomRequestDTO, userId: string) {
    const room = Room.create({ ...data, owner: userId });
    const roomData = await this.roomsRepository.save(room);

    return roomData;
  }
}
