import { v4 as uuid } from 'uuid';

export class Room {
  readonly id: string;
  name: string;
  owner: string;
  description?: string | null;
  readonly created_at?: Date;
  readonly updated_at?: Date;

  constructor(data: Omit<Room, 'id' | 'created_at' | 'updated_at'>) {
    Object.assign(this, data);
    this.id = uuid();
  }

  static create(data: Omit<Room, 'id' | 'created_at' | 'updated_at'>) {
    const room = new Room(data);

    return room;
  }
}
