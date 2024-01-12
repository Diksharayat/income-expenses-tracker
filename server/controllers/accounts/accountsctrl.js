const createAccountsRoute=async(req,res)=>{
  try {
    res.json({msg:"Create Account route"})
  } catch (error) {
    res.json(error)
  }
}

const getAllAccountsRoute=async(req,res)=>{
  try {
      res.json({msg:"Get  route Account route"})
  } catch (error) {
      res.json(error);
  }
}

const getAccountsRoute=async(req,res)=>{
  try {
      res.json({msg:"Get single account route Account route"})
  } catch (error) {
      res.json(error);
  }
}

const deleteAccountsRoute=async(req,res)=>{
  try {
      res.json({msg:"Delete Account route"})
  } catch (error) {
      res.json(error);
  }
}

const updateAccountsRoute=async(req,res)=>{
  try {
      res.json({msg:"update Account route"})
  } catch (error) {
      res.json(error);
  }
}

module.exports={
  createAccountsRoute,
  getAllAccountsRoute,
  getAccountsRoute,
  deleteAccountsRoute,
  updateAccountsRoute

}