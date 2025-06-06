import User from "../models/users.model.js";

class UserInfo {
  async getUserProfileService(userId) {
    const findUser = await User.findById(userId).select("name email avatar");
    if (!findUser) {
      throw new Error("User not found");
    }

    return findUser;
  }

  async getUserProfileService(userId) {
    const findUser = await User.findById(userId).select("name email avatar");
    if (!findUser) throw new Error("User not found");
    return findUser;
  }

  async updateUserProfileService(userId, data, file) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const { name, email, password } = data;

    if (name) user.name = name;
    if (email) user.email = email;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    if (file) {
      user.avatar = `/public/profile-images/${file.filename}`;
    }

    await user.save();
    return { name: user.name, email: user.email, avatar: user.avatar };
  }
}

export default new UserInfo();
