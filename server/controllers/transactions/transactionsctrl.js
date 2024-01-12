const createTransactionsControl=async(req,res)=>{
  try {
      res.json({msg:"Create transactions route"})
  } catch (error) {
      res.json(error);
  }
}


const getTransactionsControl=async(req,res)=>{
  try {
      res.json({msg:"get transaction route"})
  } catch (error) {
      res.json(error);
  }
}

const getAllTransactionsControl=async(req,res)=>{
  try {
      res.json({msg:"get transaction route"})
  } catch (error) {
      res.json(error);
  }
}

const deleteTransactionsControl=async(req,res)=>{
  try {
      res.json({msg:"delete transaction route"})
  } catch (error) {
      res.json(error);
  }
}

const updateTransactionsControl=async(req,res)=>{
  try {
      res.json({msg:"update transaction route"})
  } catch (error) {
      res.json(error);
  }
}
module.exports={
  createTransactionsControl,
  getTransactionsControl,
  getAllTransactionsControl,
  deleteTransactionsControl,
  updateTransactionsControl
}