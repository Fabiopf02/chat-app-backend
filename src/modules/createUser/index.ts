import { PrismaUsersRepository } from '../../repositories/implementations/PrismaUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';

const prismaUsersRepository = new PrismaUsersRepository();
const createUserService = new CreateUserService(prismaUsersRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserController };
