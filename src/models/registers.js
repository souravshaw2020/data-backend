const mongoose = require("mongoose");

const personalSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phonenumber: {
        type:String,
        required:true
    },
    accounttype: {
        type:String,
        required:true
    },
    accountnumber: {
        type:String,
        required:true
    },
    storagetype: {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register", personalSchema);
module.exports = Register;