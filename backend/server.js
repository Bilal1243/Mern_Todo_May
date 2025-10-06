import express from "express";
import connectDb from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();

connectDb()

let port = process.env.PORT

// app.httpMethod(url,handler)

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get('/',(req,res)=>{
    res.send('success')
})


app.listen(port, () => console.log("server started"));
// BPFARg6bh4sCrJD5