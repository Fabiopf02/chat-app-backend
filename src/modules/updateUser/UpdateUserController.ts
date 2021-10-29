import { Request, Response } from 'express';
import { UpdateUserService } from './UpdateUserService';

export class UpdateUserController {
  constructor(private updateUser: UpdateUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, bio, avatar_url } = req.body;
      const userId = req.headers.userid;

      await this.updateUser.execute(userId!, { name, bio, avatar_url });

      return res.status(200).json({ message: 'Updated user' });
    } catch (err: any) {
      return res.status(400).json({ error: err.massage || 'Unexpected error' });
    }
  }
}
