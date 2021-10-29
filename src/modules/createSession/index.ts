import { PrismaUsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { CreateSessionController } from './CreateSessionController';
import { CreateSessionService } from './CreateSessionService';

const prismaUsersRepository = new PrismaUsersRepository();
const createSessionService = new CreateSessionService(prismaUsersRepository);
const createSessionController = new CreateSessionController(
  createSessionService,
);

export { createSessionController };
