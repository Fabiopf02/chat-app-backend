import { IRoomsRepository } from '@repositories/IRoomsRepositories';
import { IUpdateRoomRequestDTO } from './UpdateRoomDTO';

export class UpdateRoomService {
  constructor(private roomsRepository: IRoomsRepository) {}

  async execute(data: IUpdateRoomRequestDTO, userId: string, roomId: string) {
    const roomExists = await this.roomsRepository.findById(roomId);

    if (!roomExists) {
      throw new Error('The room does not exist');
    }
    if (roomExists.owner !== userId) {
      throw new Error('Operation not permitted');
    }

    await this.roomsRepository.update(data, roomId);
  }
}
