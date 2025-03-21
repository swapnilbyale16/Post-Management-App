let mongoose = require("mongoose")
let express = require("express")
let cors = require("cors")
const rt = require("./routes/rtes")

let app = express()
app.use(express.json())
app.use(cors())
app.use("/",rt)

mongoose.connect("mongodb://127.0.0.1:27017/postmapp").then(()=>{
    console.log("con ok")
})

app.listen(5000)