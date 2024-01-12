
// Register
const registerUserController=async(req,res)=>{
  try{
       res.json({msg:'Register route'})
  }catch(error){
       res.json(error);
  }
}

// login
const loginUserController=async(req,res)=>{
  try{
       res.json({msg:'login route'})
  }catch(error){
       res.json(error);
  }
}


// profile
const profileUserControl=async(req,res)=>{
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