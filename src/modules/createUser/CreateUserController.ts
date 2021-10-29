import { Token } from '@utils/token';
import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const user = await this.createUser.execute({ name, email, password });

      const token = Token.create(user.id);
      return res.status(201).json({ user, token });
    } catch (err: any) {
      return res
        .status(400)
        .json({ error: err.message || 'Unexpected error.' });
    }
  }
}
