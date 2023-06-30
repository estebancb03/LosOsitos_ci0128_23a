import bcrypt from "bcrypt";
import { encrypt, compare } from "../src/helpers/encryption.js";

describe('encryption', () => {
  test('Should encrypt the value and return a hashed value', async () => {
    const password = 'password123';
    const encryptedPassword = await encrypt(password);
    expect(encryptedPassword).not.toEqual(password);
    expect(await bcrypt.compare(password, encryptedPassword)).toEqual(true);
  });

  test('Should return true if the value is equal to the hashed value', async () => {
    const password = 'estebancb';
    const encryptedPassword = '$2b$10$1akcJfv81aa5archkyezCe.Isz5LjFtC2Dln5.qjPGOkNuLvjoD3u';
    const compareResult = await compare(password, encryptedPassword);
    expect(compareResult).toEqual(true);
  });    
});

