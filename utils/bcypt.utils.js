import bcrypt from "bcrypt";

export const generateHash = async (password) => {
  return await bcrypt.hash(password, 12);
};

export const validateHash = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
