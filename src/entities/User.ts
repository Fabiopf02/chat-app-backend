import { v4 as uuid } from 'uuid';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  bio?: string | null;
  avatar_url?: string | null;
  readonly created_at?: Date;
  readonly updated_at?: Date;

  constructor(data: Omit<User, 'id'>, id?: string) {
    Object.assign(this, { ...data, id });

    if (!this.id) {
      this.id = uuid();
    }
  }

  static create(data: Omit<User, 'id'>) {
    const user = new User(data);

    return user;
  }
}
