import { Request, Response } from 'express';
import { UpdateRoomService } from './UpdateRoomService';

export class UpdateRoomController {
  constructor(private updateRoom: UpdateRoomService) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const userId = req.headers.userid;
      const roomId = req.headers.roomid;

      await this.updateRoom.execute({ name, description }, userId!, roomId!);

      return res.status(200).json({ message: 'Updated room' });
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.massage || 'Unexpected error.' });
    }
  }
}
