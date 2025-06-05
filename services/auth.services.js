import User from "../models/users.model.js";
import { hashPassword } from "../Auth/userAuth.auth.js";
import generateToken from "../utils/generateToken.utils.js";
import bcrypt from "bcrypt";

class AuthService {
  async register(body) {
    try {
      const { name, email, password } = body;
      const hashedPassword = await hashPassword(password);

      //Apply validation here
      return await User.create({
        name,
        email,
        password: hashedPassword,
      });
    } catch (error) {
      throw new Error("User registration failed");
    }
  }

  async login(body) {
    try {
      const { email, password } = body;
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        throw new Error("User not found");
      }

      const isValid = await bcrypt.compare(password, existingUser.password);
      if (!isValid) {
        throw new Error("Invalid Credentials");
      }

      const token = generateToken({
        id: existingUser._id,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });

      const { password: _, ...userWithoutPassword } = existingUser.toObject();

      return {
        user: userWithoutPassword,
        token,
      };
    } catch (error) {
      throw new Error(error.message || "Something went wrong during login");
    }
  }
}

export default new AuthService();
