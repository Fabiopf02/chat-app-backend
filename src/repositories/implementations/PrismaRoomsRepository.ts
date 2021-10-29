import { Room } from '@entities/Room';
import { IRoomsRepository } from '@repositories/IRoomsRepositories';
import prisma from '_@prisma';

export class PrismaRoomsRepository implements IRoomsRepository {
  async save(data: Omit<Room, 'created_at' | 'updated_at'>): Promise<Room> {
    const room = await prisma.room.create({
      data,
    });

    return room;
  }

  async findByUser(userId: string): Promise<Room[]> {
    const rooms = await prisma.room.findMany({
      where: {
        owner: userId,
      },
    });

    return rooms;
  }

  async update(data: { name: string; description: string }, roomId: string) {
    await prisma.room.update({
      data: data,
      where: {
        id: roomId,
      },
    });
  }

  async findById(id: string): Promise<Room | null> {
    const room = await prisma.room.findUnique({
      where: {
        id,
      },
    });

    return room;
  }
}
