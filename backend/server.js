const express = require("express")
const  route  = require("./routes/routes")
require("./database/config")
const app = express()

app.use(express.json())
 
app.use("/",route)

app.listen(5001,console.log("port 5001"))