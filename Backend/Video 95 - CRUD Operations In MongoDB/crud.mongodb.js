use("CrubDb")
// CREATE

db.createCollection("courses69")


// db.courses69.insertOne({
//     name: "DIVYAM YADAV",
//     age: 14,
//     subject: "MATHEMATICS"
// })

// db.courses69.insertMany([
//     {
//         name: "HARRY YADAV",
//         age: 24,
//         subject: "SCIENCE"
//     },
//     {
//         name: "KIRTI YADAV",
//         age: 42,
//         subject: "ENGLISH"
//     }
// ])

// READ
let a = db.courses69.findOne({name: "HARRY YADAV"})
console.log(a)

// UPDATE

db.courses69.updateOne({name: "KIRTI YADAV"}, {$set:{name: "KIRTI PRADEEP YADAV"}})

// DELETE

db.courses69.deleteOne({age: 10})