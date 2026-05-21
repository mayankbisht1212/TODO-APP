// writing the basic backend boilerplate code

const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")


const app = express();

app.use(express.json());
app.use(cors());

//body{
// title:
// description:
// }
app.post("/todo" , async function(req, res){
    const createPayLoad = req.body;
    const paresePayLoad = createTodo.safeParse(createPayLoad);
    if(!paresePayLoad.success){
        res.status(411).json({
            msg: "you send the wrong inputs"
        })
        return;
    }
    // put in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos" , async function(req , res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed" , async function(req , res){
    const creatPayLoad = req.body;
    const paresePayLoad = createTodo.safeParse(creatPayLoad);
    if(!paresePayLoad){
        res.status(411).json({
            msg: "you send the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })

})

app.listen(3000);