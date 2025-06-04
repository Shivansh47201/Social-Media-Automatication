import User from "../models/users.model.js";
import AuthServices from "../services/auth.services.js";



export const register = async (req, res) => {

  try{
     const response = await AuthServices.register(req.body);
     return res.status(201).json({ success: true, data: response });

  }catch(error){
        return res.status(500).json({ success: false, message: error.message });
  }
  
};

export const login = async (req, res) => {

  try{
     const response = await AuthServices.login(req.body);
     return res.status(201).json({ success: true, data: response });

  }catch(error){
        return res.status(500).json({ success: false, message: error.message });
  }
  
};

