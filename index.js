const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const morgan = require('morgan');

// Import the client and dbConnect function from mongodb.config.js
const { dbConnect, client } = require("./mongodb/mongodb.config");
const { ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// run mongodb
dbConnect();

const usersCollection = client.db('vedicEnergy').collection('usersMessage');
app.post('/usermessage',async(req,res)=>{
    const user=req.body;
    // console.log(user)
    const result=await usersCollection.insertOne(user);
    console.log(result)
    res.send(result)
})



app.get('/', (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));