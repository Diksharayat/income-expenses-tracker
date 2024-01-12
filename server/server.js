const express=require('express');
require("./config/dbConnect");
const usersRoute =require('./routes/users/usersRoute')
const transactionsRoute =require('./routes/transactions/transactionsRoute');
const accountsRoute=require("./routes/users/usersRoute");
const app=express();
 
// middlewares

// routes
// user routes
app.use("/api/v1/users",usersRoute);
app.use("/api/v1/transactions",transactionsRoute);
app.use("/api/v1/accounts",accountsRoute);



//    account route

//POST/api/v1/accounts
// app.post('/api/v1/accounts',async(req,res)=>{
//       try {
//           res.json({msg:"Create Account route"})
//       } catch (error) {
//           res.json(error);
//       }
// });


//GET/api/v1/accounts/
// app.get('/api/v1/accounts/',async(req,res)=>{
//      try {
//          res.json({msg:"Get single account route Account route"})
//      } catch (error) {
//          res.json(error);
//      }
// });


//GET/api/v1/accounts/:id
// app.get('/api/v1/accounts/:id',async(req,res)=>{
//      try {
//          res.json({msg:"Get single account route Account route"})
//      } catch (error) {
//          res.json(error);
//      }
// });


//DELETE/api/v1/accounts/:id
// app.delete('/api/v1/accounts/:id',async(req,res)=>{
//      try {
//          res.json({msg:"Delete Account route"})
//      } catch (error) {
//          res.json(error);
//      }
// });


// PUT/api/v1/accounts/:id
app.put('/api/v1/accounts/:id',async(req,res)=>{
     try {
         res.json({msg:"update Account route"})
     } catch (error) {
         res.json(error);
     }
});





// Error handlers
 
// listen to server
const port = process.env.PORT||6000;

app.listen(port,console.log(`SERVER IS UP AND RUNNING ON PORT ${port}`));