const mongoose = require('mongoose');

const sigma = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Dept: String,
        Sal:Number
    }
)
const EmployeeModel = mongoose.model('employee', sigma);
module.exports = EmployeeModel;