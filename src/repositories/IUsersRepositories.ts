import { User } from '@entities/User';

export interface IUsersRepository {
  save(user: Omit<User, 'created_at' | 'updated_at'>): Promise<User>;
  update(
    data: { name: string; bio: string; avatar_url: string },
    user: string,
  ): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
