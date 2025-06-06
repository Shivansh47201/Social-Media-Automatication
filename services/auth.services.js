import User from "../models/users.model.js";
import { hashPassword } from "../utils/Auth/userAuth.auth.js";
import generateToken from "../utils/generateToken.utils.js";
import bcrypt from "bcrypt";

class AuthService {
  async register(body) {
    try {
      const { name, email, password, avatar } = body;
      const hashedPassword = await hashPassword(password);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar,
      });

      // Generate JWT token after registration
      const token = generateToken({
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
      });

      const { password: _, ...userWithoutPassword } = user.toObject();

      return {
        user: userWithoutPassword,
        token,
      };
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
