import { Token } from '@utils/token';
import { Request, Response } from 'express';
import { CreateSessionService } from './CreateSessionService';

export class CreateSessionController {
  constructor(private createSession: CreateSessionService) {}

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await this.createSession.execute({ email, password });
      const token = Token.create(user.id);

      return res.status(200).json({ user, token });
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message || 'Unexpected error.' });
    }
  }
}
