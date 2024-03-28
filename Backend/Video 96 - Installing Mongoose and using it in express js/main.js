import mongoose from 'mongoose';
import express from 'express';
import { Todo } from './models/Todo.js';

const mainFunc = async ()=>{
    var connection = await mongoose.connect("mongodb://localhost:27017/todo")
}

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({title: "Divyam", desc: "Buy summer clothes", isDone: false})
    todo.save()
    res.send('Hello World!');
});

app.get('/getTodo', (req, res)=>{
    let todo = Todo.findOne({})
    res.json({title: todo.title, desc: todo.desc, isDone: todo.isDone})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

mainFunc()