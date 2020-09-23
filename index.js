const express = require("express")
const bodyparser =require("body-parser")
const app = express()


app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))


const {signup,login} = require("./Account/Auth.js");

app.post("/singup", signup)

app.post("/login", login)


app.listen(3000, ()=>{
  console.log("sever runing on 3000")
})