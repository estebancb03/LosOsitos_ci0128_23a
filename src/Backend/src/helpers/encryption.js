import bcrypt from "bcrypt";

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const compare = async (password, passwordToCompare) => {
  return await bcrypt.compare(password, passwordToCompare);
}

export { encrypt, compare };
