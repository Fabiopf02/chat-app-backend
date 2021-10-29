import { Request, Response } from 'express';
import { ListRoomService } from './ListRoomService';

export class ListRoomController {
  constructor(private listRoom: ListRoomService) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = req.headers.userid;

      const rooms = await this.listRoom.execute(userId!);

      return res.status(200).json(rooms);
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message || 'Unexpected error.' });
    }
  }
}
