import User from "../models/users.model.js";
import AuthServices from "../services/auth.services.js";

export const register = async (req, res) => {
  try {
    const avatarPath = req.file ? `/uploads/${req.file.filename}` : null;

    const userPayload = {
      ...req.body,
      avatar: avatarPath,
    };
    console.log("Uploaded file info:", req.file);

    const response = await AuthServices.register(userPayload);
    // response: { user, token }
    return res.status(201).json({
      success: true,
      user: response.user,
      token: response.token,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const response = await AuthServices.login(req.body);
    return res.status(201).json({ success: true, data: response });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
