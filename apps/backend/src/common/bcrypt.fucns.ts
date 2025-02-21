import * as bcrypt from "bcrypt";

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password: string, encrypted: string) => {
  return await bcrypt.compare(password, encrypted);
};

export { hashPassword, comparePassword };
