import UserInfo from "../services/user.services.js";

export const getProfile = async (req, res) => {
  try {
    const user = await UserInfo.getUserProfileService(req.userId);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const userUpdateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const data = req.body;
    const file = req.file;

    const updatedUser = await UserInfo.updateUserProfileService(userId, data, file);

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
