import User from "../models/users.model.js";
import { hashPassword } from "../Auth/userAuth.auth.js";

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

  async login(body){
    
  }

  
}

export default new AuthService();
