import { Request, Response } from 'express';
import { CreateRoomService } from './CreteRoomService';

export class CreateRoomController {
  constructor(private createRoom: CreateRoomService) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const userId = req.headers.userid;

      const room = await this.createRoom.execute(
        { name, description },
        userId!,
      );

      return res.status(201).json({ room });
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message || 'Unexpected error.' });
    }
  }
}
