import bcrypt from "bcrypt";
import { encrypt, compare } from "../src/helpers/encryption.js";

describe('encryption', () => {
  test('Should encrypt the value and return a hashed value', async () => {
    const password = 'password123';
    const encryptedPassword = await encrypt(password);
    expect(encryptedPassword).not.toEqual(password);
    expect(await bcrypt.compare(password, encryptedPassword)).toEqual(true);
  });    
});

