import { IUsersRepository } from '@repositories/IUsersRepositories';
import { IUpdateUserRequestDTO } from './UpdateUserDTO';

export class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userId: string, data: IUpdateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findById(userId);

    if (!userAlreadyExists) {
      throw new Error('User does not exists!');
    }

    await this.usersRepository.update(data, userId);
  }
}
