import { PrismaRoomsRepository } from '@repositories/implementations/PrismaRoomsRepository';
import { CreateRoomController } from './CreateRoomController';
import { CreateRoomService } from './CreteRoomService';

const prismaRoomsRepository = new PrismaRoomsRepository();
const createRoomService = new CreateRoomService(prismaRoomsRepository);
const createRoomController = new CreateRoomController(createRoomService);

export { createRoomController };
