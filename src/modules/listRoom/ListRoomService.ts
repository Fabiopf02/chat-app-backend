import { IRoomsRepository } from '@repositories/IRoomsRepositories';

export class ListRoomService {
  constructor(private roomsRepository: IRoomsRepository) {}

  async execute(userId: string) {
    const rooms = this.roomsRepository.findByUser(userId);

    return rooms;
  }
}
