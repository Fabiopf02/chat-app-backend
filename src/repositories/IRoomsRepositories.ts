import { Room } from '@entities/Room';

export interface IRoomsRepository {
  save(data: Omit<Room, 'created_at' | 'updated_at'>): Promise<Room>;
  findById(id: string): Promise<Room | null>;
  findByUser(userId: string): Promise<Room[]>;
  update(
    data: { name: string; description: string },
    roomId: string,
  ): Promise<void>;
}
