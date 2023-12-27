const {Router} = require("express");
const myEmitter = require("./SignletonPatern");

const router = Router();

router.get("/:message",(req,res)=>{
const {message} =req.params

    myEmitter.emitter.emit("setMessage",message);

    return res.json({message});
})

module.exports= router