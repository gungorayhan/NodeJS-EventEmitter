const {Router} = require("express")
const myEmitter = require("./SignletonPatern")
const router = Router();

router.get("/",(req,res)=>{
    
    const messageSet =(message)=>{
        console.log("emmitter içerisindeyiz: " + message ) 
    }

    myEmitter.emitter.on("setMessage",messageSet);
   
    return res.json({message:"Gelen mesaj emittir üzerinde tanımlaması yapıldi. /listenMessage adresinden dinleyebilirsiniz" });

})

module.exports= router;