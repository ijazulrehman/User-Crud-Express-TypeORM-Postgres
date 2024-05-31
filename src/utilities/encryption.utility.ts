const bcrypt = require('bcrypt');

export default class Encryption {
  static async generateHash(
    password: string,
    saltRounds: number,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err: any, hash: string) => {
        if (!err) {
          resolve(hash);
        }
        reject(err);
      });
    });
  }

  static async verifyHash(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (err: any, result: string) => {
        if (result) {
          resolve(true);
        }
        resolve(false);
      });
    });
  }
}
