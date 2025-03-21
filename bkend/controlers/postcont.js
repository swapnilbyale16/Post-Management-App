const pm = require("../model/pmodel")
let {v4} = require("uuid")

let addpost = async(req,res)=>{
    try{
        let data = pm({...req.body,"_id":v4()})
        await data.save()
        res.json({"msg":"post go for review"})
    }catch(err){
        res.json({"msg":"Error in adding the post"})
    }
}

let allpost=async(req,res)=>{
    try{
        let data = await pm.find()
        res.json(data)
    }catch(err){
        res.json({"msg":"unable to fetech the data"})
    }
}

let getpost = async(req,res)=>{
    try{
        let data = await pm.find({"status":"accepted"})
        res.json(data)
    }catch(err){
        res.json({"msg":"err in getting post"})
    }
}

let catpost = async(req,res)=>{
    try{
        let data = await pm.find({"cat":req.params.cat,"status":"accepted"})
        res.json(data)
    }catch(err){
        res.json({"msg":"err in getting post"})
    }
}
let postbyme = async(req,res)=>{
    try{
        let data = await pm.find({"uid":req.params.uid})
        res.json(data)
    }catch(err){
        res.json({"msg":"unable to fetch"})
    }
}

let updpost = async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json({"msg":"updation done"})
    }catch(err){
        res.json({"msg":"error in updation"})
    }
}

let postdel=async(req,res)=>{
    try{
        await pm.findByIdAndDelete({"_id":req.params.id})
        res.json({"msg":"post deleted"})
    }catch(err){
        res.json({"msg":"unable to delete"})
    }
}

let editpost=async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json({"msg":"updation done"})
    }catch(err){
        res.json({"msg":"post not updated"})
    }
}

let addlike=async(req,res)=>{
    try{
        let a=await pm.find({"_id":req.body._id,"dlikes":{$in:[req.body.uid]}})
        if(a.length==0)
        {
        await pm.findByIdAndUpdate({"_id":req.body._id},{$addToSet:{"likes":req.body.uid}})
        }
        res.json({"msg":"ok"})
    }
    catch(err)
    {
        res.json({"msg":"oops can't like"})
    }
}

let dlike=async(req,res)=>{
    try{
        let a=await pm.find({"_id":req.body._id,"likes":{$in:[req.body.uid]}})
        if(a.length==0)
        {
        await pm.findByIdAndUpdate({"_id":req.body._id},{$addToSet:{"dlikes":req.body.uid}})
        }
        res.json({"msg":"ok"})
    }
    catch(err)
    {
        res.json({"msg":"oops can't like"})
    }
}





module.exports = {addpost, getpost, catpost, postbyme, allpost, updpost,postdel,editpost,addlike,dlike}
