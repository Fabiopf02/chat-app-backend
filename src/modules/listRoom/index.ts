import { PrismaRoomsRepository } from '@repositories/implementations/PrismaRoomsRepository';
import { ListRoomController } from './ListRoomController';
import { ListRoomService } from './ListRoomService';

const prismaRoomsRepository = new PrismaRoomsRepository();
const listRoomService = new ListRoomService(prismaRoomsRepository);
const listRoomController = new ListRoomController(listRoomService);

export { listRoomController };
