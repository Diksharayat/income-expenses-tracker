const mongoose= require("mongoose");

// user Schema

const accountSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  account:{
    type:String,
    enum:[
      "Saving",
      "Investment",
      "Checking",
      "Credit Card",
      "builing",
      "School",
      "Project",
      "Utilities",
      "Travel",
      "Personal",
      "Groceries",
      "Entertainment",
      "Loan",
      "Cash flow",
      "Uncategorized"
    ],
    required:true,
  },

  initialBalance:{
    type:Number,
    default:0,
  },
  

  
  transactions:[
    {
    type:mongooose.Schema.types.objectId,
    ref:"Transaction",
  },
  ],


  createdBy:{
    type:mongoose.Schema.Types.objectId,
    ref:"User",
  },

  notes:{
    type:String,
    required:true,

  },

},{
  timestamps:true,
  toJSON:{virtuals:true},
});

// model
const Account = mongoose.model("Account",accountSchema);

module.exports=Account;