import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import Todos from "./Model/todoModel.js";

dotenv.config();

const app = express();

connectDb();

let port = process.env.PORT;

// app.httpMethod(url,handler)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("success");
});

app.post("/create", async (req, res) => {
  //   let title = req.body.title
  //   let description = req.body.description

  let { title, description } = req.body;

  let todo = await Todos.create({
    title,
    description,
  });

  res.send(todo);
});

app.listen(port, () => console.log("server started"));
// BPFARg6bh4sCrJD5
