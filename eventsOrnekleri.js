var EventEmitter = require("events");
//========================1========================
// var eventEmitter = new EventEmitter();

// var olayim = function(){
//     console.log("olay emitter da çalışıyor")
// }
// //  olayim();

// eventEmitter.on("olay",olayim) //olay adında bir fonksiyonu dinliyoruz. burada önemli olan fonksiyonu müdahale edilebilir kılmak adına dışarıda yazmak

// eventEmitter.emit("olay");

//============================2==========================
// class MyEmitter extends EventEmitter{}

// const myEmitter = new MyEmitter();

// const userLogin=(username)=>{
// console.log(username + "adlı kullanıcı giriş yaptı")
// }

// myEmitter.on("userLoggedIn",userLogin)

// const message =(message)=>{
//     console.log("Kullanıcıdan gelen mesaj " +message)
// }

// myEmitter.on("message",message)


// myEmitter.emit("userLoggedIn","Ayhan Gungor")
// myEmitter.emit("message","Merhaba");

//============================3==========================

class MyEventEmitter extends EventEmitter{
    constructor(){
        super();
        this.message="";
    }

    setMessage(message){
        this.message = message;
        //-messageSet- adından bir olayı tetikle
        this.emit("messageSet", this.message)
    }
}

class SingletonEvenManager{
    constructor(){
        if(!SingletonEvenManager.instance){
            this.EventEmitter= new MyEventEmitter();
            SingletonEvenManager.instance =this;
        }

        return SingletonEvenManager.instance;
    }

    getEventEmitter(){
        return this.EventEmitter;
    }
}

const singletonInstance1= new SingletonEvenManager();
const singletonInstance2 = new SingletonEvenManager();

// aynı olaya referasn verdiklerinden iki örnekte birbirine eşit olacaktır 
console.log(singletonInstance1 === singletonInstance2);

const myEmitter = singletonInstance1.getEventEmitter();

myEmitter.on("messageSet",(message)=>{
    console.log("Mesaj ayarlandı: " + message)
}) // on metodu ile olayımızı tanımlıyoruz. eğer olayı tanımladan setMessage içerisinde emit ile dinlemeye çalışır isek hernagi bir çıktı almayacağız


myEmitter.setMessage("Singleton örneğidir");