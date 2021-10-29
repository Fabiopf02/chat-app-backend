import { IUsersRepository } from '@repositories/IUsersRepositories';
import { Crypt } from '@utils/crypt';
import { ICreateSessionRequestDTO } from './CreateSessionDTO';

const { compare } = new Crypt();

export class CreateSessionService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: ICreateSessionRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(user.email);

    if (!userExists) {
      throw new Error('User does not exists!');
    }

    const passwordMatch = compare(user.password, userExists.password);

    if (!passwordMatch) {
      throw new Error('Passwords do not match.');
    }
    const { password, ...data } = userExists;
    return data;
  }
}
