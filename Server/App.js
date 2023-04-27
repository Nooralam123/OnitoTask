
const express = require("express")
const app = express()
const cors = require("cors")
require("./db/db");
const User = require("./model/schema")
const port = 8000 || process.env.PORT ;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send({result : "server is working"})
})

app.post("/register/api" , async(req , res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
      } catch (error) {
        res.status(400).send(error);
      }
})



app.listen(port, () => {
    console.log("server is running")
})