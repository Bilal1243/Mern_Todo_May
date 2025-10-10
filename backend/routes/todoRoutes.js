import express from "express";

const todoRoute = express.Router();
import { addTodo, getTodos } from "../controllers/todoController.js";

// http://localhost:4000/api/todo
todoRoute.get("/", getTodos);

// http://localhost:4000/api/todo/create
todoRoute.post("/create", addTodo);

export default todoRoute;