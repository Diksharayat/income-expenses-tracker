const express=require("express");
const { registerUserController, loginUserController, profileUserControl, deleteUserControl, updateUserControl } = require("../../controllers/users/usersctrl");


const usersRoute=express.Router();



// POST/api/v1/users/register
usersRoute.post("/register",registerUserController);

// POST/api/v1/users/login
usersRoute.post("/login",loginUserController);

// GET/api/v1/users/profile/:id
usersRoute.get("/profile/:id",profileUserControl)

// DELETE/api/v1/users/:id
usersRoute.delete("/:id",deleteUserControl)

// PUT/api/v1/users/profile/:id
usersRoute.put("/profile/:id",updateUserControl)




module.exports=usersRoute;
