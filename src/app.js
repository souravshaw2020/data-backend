const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const register = require("./models/registers");
const port = process.env.PORT || 8080;



app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world")
});

app.post("/register", async (req, res) => {
    const dbMessages = req.body
    // res.json({message: dbMessages});
    // res.setHeader('Content-Type','application/json');

    await register.create(dbMessages, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(`New Form Created : \n ${data}`)
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
})