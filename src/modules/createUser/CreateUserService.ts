import { Crypt } from '@utils/crypt';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';
import { ICreateUserRequestDTO } from './CreateUserDTO';

const { encrypt } = new Crypt();

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const passwordHash = encrypt(data.password);
    const userCreate = User.create({ ...data, password: passwordHash });
    const user = await this.usersRepository.save(userCreate);

    const { password, ...userData } = user;

    return userData;
  }
}
