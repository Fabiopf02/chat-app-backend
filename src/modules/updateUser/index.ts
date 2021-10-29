import { PrismaUsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserService } from './UpdateUserService';

const prismaUsersRepository = new PrismaUsersRepository();
const updateUserService = new UpdateUserService(prismaUsersRepository);

const updateUserController = new UpdateUserController(updateUserService);

export { updateUserController };
