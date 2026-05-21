const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mayankbisht_db_user:MayankGlaiveOp9045_@admin.2cxfooc.mongodb.net/todos");
const todoSchema = {
    title: String,
    description: String,
    completed: Boolean
}

const todo = mongoose.model('todos' , todoSchema);

module.exports={
    todo: todo
}