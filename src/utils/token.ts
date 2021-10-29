import { decode, JwtPayload, sign, verify } from 'jsonwebtoken';

interface IRes extends JwtPayload {
  id: string;
}

export class Token {
  token: string;
  constructor(userId: string) {
    this.token = sign({ id: userId }, process.env.JWT_SECRET!, {
      expiresIn: 604800,
    });
  }

  static create(id: string): string {
    const result = new Token(id);

    return result.token;
  }

  static verify(token: string) {
    return verify(token, process.env.JWT_SECRET!);
  }

  static decode(token: string): string {
    const res = decode(token) as IRes;

    return res.id;
  }
}
