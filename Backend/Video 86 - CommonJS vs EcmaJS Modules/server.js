<<<<<<< HEAD
const http = require('node:http')
const hostname = '127.0.0.1'
const port = 6969
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello World\n")
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
=======
// import {a, b, d, e} from './mymodule.js'
// console.log(a, b, e, d)

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)
>>>>>>> aef8cd78165b3f238eeab107dab00c5a4c7723ef
