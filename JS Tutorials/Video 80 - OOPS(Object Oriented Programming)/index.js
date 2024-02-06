// let obj = {
//     a: 1,
//     b: "Divyam"
// }

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

class Animal{
    constructor(name, age){
        console.log("Object is creted")
        this.name = name;
        this.age = age;
    }

    giveAge(){
        console.log(this.age)
    }

    giveName(){
        console.log(this.name)
    }
}

let a = new Animal("Hridhaan", 69)
a.giveAge()
a.giveName()