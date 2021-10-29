import { User } from '@entities/User';
import prisma from '../../prisma';
import { IUsersRepository } from '../IUsersRepositories';

export class PrismaUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async save(data: User) {
    const user = await prisma.user.create({
      data: data,
    });

    return user;
  }

  async update(
    data: { name: string; bio: string; avatar_url: string },
    user: string,
  ): Promise<void> {
    await prisma.user.update({
      data: data,
      where: { id: user },
    });
  }
}
