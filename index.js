const express = require("express");
const myEmitter = require("./SignletonPatern")


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));





app.use("/setMessage",require("./setMessage"));
// app.use("/setMessage",(req,res)=>{
//     const messageSet =(message)=>{
//         console.log("emmitter içerisindeyiz")
//         return message;
//     }

//     myEmitter.emitter.on("setMessage",messageSet);

//     return res.json({message:"Gelen mesaj emittir üzerinde tanımlaması yapıldi. /listenMessage adresinden dinleyebilirsiniz" });

// });

app.use("/listenMessage",require("./listenMessage"))

app.listen(3000,()=>{
    console.log("Events server is listening")
})