const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/*", (req, res)=>{
    res.send("Page is not found found not found not found!!!")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});