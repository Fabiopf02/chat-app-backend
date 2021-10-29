import { PrismaUsersRepository } from '@repositories/implementations/PrismaUsersRepository';
import { Token } from '@utils/token';
import { NextFunction, Request, Response } from 'express';

const usersRepository = new PrismaUsersRepository();

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new Error('No token provided!');
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      throw new Error('Token error!');
    }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)) {
      throw new Error('Token malformatted!');
    }

    Token.verify(token);

    const userId = Token.decode(token);

    if (userId !== req.headers.userid) {
      throw new Error('Operation not permitted!');
    }

    const userExists = await usersRepository.findById(userId);

    if (!userExists) {
      throw new Error('User does not exist!');
    }

    return next();
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
}
