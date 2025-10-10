import Todos from "../Model/todoModel.js";

const addTodo = async (req, res) => {
  //   let title = req.body.title
  //   let description = req.body.description

  let { title, description } = req.body;

  let todo = await Todos.create({
    title,
    description,
  });

  res.send(todo);
};

const getTodos = async (req, res) => {
  let todos = await Todos.find();

  res.send(todos);
};

export { addTodo, getTodos };