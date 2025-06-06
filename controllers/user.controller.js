import getUserProfile from "../services/user.services.js";

export const getProfile = async (req, res) => {
  try {
    const user = await getUserProfile(req.userId);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const userUpdateProfile = async (req, res) => {
  try {
   
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
