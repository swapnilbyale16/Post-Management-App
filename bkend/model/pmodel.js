let mongoose = require("mongoose")
let postsch = new mongoose.Schema({
    _id:String,
    title:String,
    cat:String,
    text:String,
    uname:String,
    uid:String,
    date:String,
    comm:String,
    likes:[],
    dlikes:[],
    status:{type:String, default:"pending"}
})
let pm = mongoose.model("post",postsch)

module.exports = pm