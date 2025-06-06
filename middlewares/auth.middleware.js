import Joi from "joi";

const userValidation = (req, res, next) => {
  const { name, email, password } = req.body;
  const userInfo = { name, email, password };

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),

    password: Joi.string().min(8).max(15),
    
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "in"] },
    }),
  });

 
  const { error } =  schema.validate(userInfo);
  if(error){
    return res.status(501).json({error: error.details[0].message})
  };
  next();
};

export default userValidation
