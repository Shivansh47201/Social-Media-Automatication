
import bcrypt from 'bcrypt';

const saltRound = 10;

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRound);
};