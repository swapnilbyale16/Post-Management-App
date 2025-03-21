const um = require("../model/umodel")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

let reg =async(req,res)=>{
    try{
        let obj = await um.findById({"_id":req.body._id})
        if(obj){
            res.json({"msg":"Email already Exist"})
        }else{
            let hashcode = await bcrypt.hash(req.body.pwd,10)
            let data = um({...req.body,"pwd":hashcode})
            await data.save()
            res.json({"msg":"reg done"})
        }
    }catch(err){
        res.json({"msg":"err in reg"})
    }
}

let login = async(req,res)=>{
    try{
        let obj = await um.findById({"_id":req.body._id})
        if(obj){
            let f = await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f){
                res.json({"token": jwt.sign({"_id":obj._id},"post"),"_id":obj._id,"name":obj.name,"role":obj.role})
            }else{
                res.json({"msg":"check password"})
            }
        }else{
            res.json({"msg":"Check your mail"})
        }
    }catch(err){
        res.json({"msg":"error in login"})
    }
}

let islogin = async(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization, "post")
        next()
    }catch(err){
        res.json({"msg":"please login first"})
    }
}


let isadmin = async (req, res, next) => {
    try {
        let obj = await um.findById({ "_id": req.headers.uid })
        if (obj && obj.role == "admin") {
            next()
        }
        else {
            res.json({ "msg": "you are not admin" })
        }
    }
    catch (err) {
        res.json({ "msg": "error in authorization" })
    }
}


module.exports = {reg, login, islogin,isadmin}