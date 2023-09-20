const mongoose = require('mongoose')

const user = new mongoose.Schema({
 username:{
    type:String,
    required:true
 },
 password:{
    type:Number,
    required:true
 },
 employees:{
    type:Array,
    required:true
 }

})

const tasks = mongoose.model("tasks",user)
module.exports = tasks