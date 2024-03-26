// name.png
// name.jpg
// this.zip
// me.zip
// cat.txt

// Code - 
const fs = require('fs')

fs.readdirSync('./').forEach(file => {
    console.log(file);
    console.log(file.substring(4, file.indexOf('.')));
    if(file.substring(4, file.indexOf('.')).includes('txt')){
        fs.appendFile('cat.txt', './txt/')
    }
});