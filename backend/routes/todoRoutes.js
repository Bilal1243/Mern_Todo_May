import express from "express";

const todoRoute = express.Router();
import { addTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todoController.js";

// http://localhost:4000/api/todo
todoRoute.get("/", getTodos);

// http://localhost:4000/api/todo/create
todoRoute.post("/create", addTodo);

// http://localhost:4000/api/todo/delete/82374873242hb32g3
todoRoute.delete('/delete/:id' , deleteTodo)

// http://localhost:4000/api/todo/getTodo
todoRoute.get('/getTodo',getTodoById)

todoRoute.patch('/updateTodo' , updateTodo)

export default todoRoute;