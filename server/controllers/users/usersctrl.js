const bcrypt=require("bcryptjs");
const User = require("../../model/User");
const {AppErr, appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");


// Register
const registerUserController=async(req,res,next)=>{
  const {fullname,password,email}=req.body;

     try{
          
     // Check if the email exist
     const userFound=await User.findOne({email});
     if (userFound) {
         return next(appErr("user already exists",400));
     };
    

     // we will handle this error in catch instead of like following
     // // check if the fields are empty
     // if(!email || !password || !fullname)
     // return res.json({message:"please provide all field"})

   
    
     // hash password
       const salt=await bcrypt.genSalt(10);
       const hashedPassword= await bcrypt.hash(password,salt);
       
     // create user
     const user=await User.create({
          fullname,
          email,
          password: hashedPassword,
     });

       res.json({
          status:"success",
          fullname:user.fullname,
          id: user._id
     })
  }catch(error){
       next(new Error(error));
  }
}

// login
const loginUserController=async(req, res,next)=>{
  const {email,password} = req.body;
     try{
     // check if email exist
     const userFound= await User.findOne({email});
     if(!userFound) return next(new AppErr("invalid login credentials",400))
     // check for password validity'
      const isPasswordMatch= await bcrypt.compare(password,userFound.password)
      if(!isPasswordMatch) return next(new AppErr("invalid login credentials",400))
     
     
      res.json({
     status:'success',
     fullname:userFound.fullname,
     id:  userFound._id,
     token:generateToken(userFound._id),
     });
  }catch(error){
       next(error);
  }
}


// profile
const profileUserControl=async(req,res)=>{
     // const result =verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTRlY2Q1ZGU1OGNlMzRhYjk1MTY5MCIsImlhdCI6MTcwNTMyMDU2MSwiZXhwIjoxNzA1MzI0MTYxfQ.1NDyFy0HrAbRcu0qBcIn7ZbF9P2h0ODImO6hq7oKS0I");
     // console.log(result);
     // how to get the token from header

     const headerObj=req.headers;
     const token=headerObj["authorization"].split(" ")[1];
     console.log(token);
  try{
       res.json({msg:'profile route'})
  }catch(error){
       res.json(error);
  }
}

// delete

const deleteUserControl=async(req,res)=>{
  try{
       res.json({msg:'delete route'})
  }catch(error){
       res.json(error);
  }
}

// update
const updateUserControl=async(req,res)=>{
  try{
       res.json({msg:'update route'})
  }catch(error){
       res.json(error);
  }
}


module.exports={
  registerUserController,
  loginUserController,
  profileUserControl,
  deleteUserControl,
  updateUserControl
}