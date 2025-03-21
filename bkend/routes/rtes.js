let express = require("express")
const { reg, login, islogin, isadmin } = require("../controlers/usercont")
const { addpost, getpost, catpost, postbyme, allpost, updpost, postdel, editpost, addlike, dlike } = require("../controlers/postcont")
let rt = express.Router()

rt.post("/reg",reg)
rt.post("/login",login)
rt.post("/addpost",islogin,addpost)
rt.get("/allpost",allpost)
rt.get("/getpost",getpost)
rt.get("/catpost/:cat",catpost)
rt.get("/postbyme/:uid",islogin,postbyme)
rt.put("/updpost",islogin,isadmin,updpost)
rt.delete("/postdel/:id",islogin,postdel)
rt.put("/editpost",islogin,editpost)
rt.post("/addlike",islogin,addlike)
rt.post("/dlike",islogin,dlike)

module.exports = rt