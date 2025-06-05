
import bcrypt from 'bcrypt';

const saltRound = 10;

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, saltRound);
};

export const comparePassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};