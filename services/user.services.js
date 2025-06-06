import User from "../models/users.model.js";

class UserInfo {
  async getUserProfile(userId) {
    const findUser = await User.findById(userId).select("name email avatar");
    if (!findUser) {
      throw new Error("User not found");
    }

    return findUser;
  }
}

export default new UserInfo();
