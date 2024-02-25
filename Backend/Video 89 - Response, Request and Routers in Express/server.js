const express = require("express");
const app = express();
const blogs = require('./routes/blog')
const port = 3000;

app.use(express.static("public"))
app.use('/blog', blogs)

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/index/", (req, res) => {
    // res.sendFile("templates/index.html", {root: __dirname}) This is how to send a file to an endpoint 
    res.json({a: 10, b: 20, c: 30, d: 40})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}. The URL is http://localhost:${port}`);
})