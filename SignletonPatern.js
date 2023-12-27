const EventEmitter = require("events")
var instance;
class MyEmitter {
    constructor(){
       if(!instance){
        this.emitter = new EventEmitter();
        instance = this
       }
       return instance;
    }
}

module.exports =new MyEmitter();