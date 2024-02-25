const express = require('express');
const app = express();
const fs = require("fs")
const port = 3000;

// app.use(express.static("public"))

// Middleware 1 - Logger for our application
app.use((req, res, next)=>{
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send('Hacked by middleware 1')
    next()
})

// Middleware 2
app.use((req, res, next)=>{
    console.log('Middleware 2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});