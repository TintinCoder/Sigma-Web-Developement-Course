import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;
import {Employee} from './models/Employee.js' 

const mainFunc = ()=>{
    var conn = mongoose.connect('mongodb://localhost:27017/company')
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const getRandomItem = (arr)=>{
    let sno = Math.floor(Math.random() * (arr.length - 0 + 1))
    return arr[sno]
}

const randomNames = ["Divyam", "Rajat", "Bhuvan", "Hridhaan", "Deepak"]
const randomCities = ["New Delhi", "Gurugram", "Mumbai", "Ahemdabad", "Bengluru"]

app.get('/generateData', async (req, res)=>{
    for (let index = 0; index < 10; index++) {
        Employee.deleteMany({})
        let employee = new Employee({
            name: getRandomItem(randomNames),
            salary: Math.floor(Math.random()*22000),
            city: getRandomItem(randomCities),
            isManager: Math.random()>0.5?true:false
        })
    
        await employee.save()
    }
    res.send("Done")
})

mainFunc()

app.listen(port, () => {
    console.log(`Server is listening on port port`);
});