import mongoose from "mongoose";

let todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});


let Todos = mongoose.model('todos' , todoSchema)

export default Todos