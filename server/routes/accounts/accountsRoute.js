const express =require("express");
const { createAccountsRoute, getAllAccountsRoute, getAccountsRoute, deleteAccountsRoute, updateAccountsRoute } = require("../../controllers/accounts/accountsctrl");
const accountsRoute=express.Router();


//POST/api/v1/accounts
accountsRoute.post("/",createAccountsRoute)

//GET/api/v1/accounts/
accountsRoute.get("/",getAllAccountsRoute)

//GET/api/v1/accounts/:id
accountsRoute.get("/:id",getAccountsRoute)

//DELETE/api/v1/accounts/:id
accountsRoute.delete("/:id",deleteAccountsRoute)

// PUT/api/v1/accounts/:id
accountsRoute.put("/:id",updateAccountsRoute)








module.exports=accountsRoute;