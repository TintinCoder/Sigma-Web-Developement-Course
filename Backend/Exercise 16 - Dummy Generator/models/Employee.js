import mongoose from "mongoose"

const EmployeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    city: String,
    isManager: Boolean
})

export const Employee = mongoose.model('Employee', EmployeeSchema)