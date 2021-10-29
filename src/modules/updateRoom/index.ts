import { PrismaRoomsRepository } from '@repositories/implementations/PrismaRoomsRepository';
import { UpdateRoomController } from './UpdateRoomController';
import { UpdateRoomService } from './UpdateRoomService';

const prismaRoomsRepository = new PrismaRoomsRepository();
const updateRoomService = new UpdateRoomService(prismaRoomsRepository);
const updateRoomController = new UpdateRoomController(updateRoomService);

export { updateRoomController };
