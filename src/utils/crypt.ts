import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

const salt = genSaltSync(10);

export class Crypt {
  encrypt(value: string): string {
    const encrypted = hashSync(value, salt);

    return encrypted;
  }

  compare(value: string, hash: string): boolean {
    const result = compareSync(value, hash);

    return result;
  }
}
