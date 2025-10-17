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

const deleteTodo = async (req, res) => {
  try {
    const deleted = await Todos.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Todo Not Found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todos.findById(req.query.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo Not Found" });
    }

    res.json(todo);
  } catch (error) {}
};

export { addTodo, getTodos,deleteTodo,getTodoById };
