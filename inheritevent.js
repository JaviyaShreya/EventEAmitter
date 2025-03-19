const events = require("events")

class Child extends events.EventEmitter{
    constructor(){
        super()
    }
    start(){
        this.emit("started")
        setTimeout(() => {
            this .emit('progress',50)
            setTimeout(() => {
                this.emit('progress',100)
                this.emit('completed')   
            },1000);
        },2000);
    }
}

const child = new Child()

child.on('started',()=>{
    console.log("started")
})
child.on('progress',(progress)=>{
    console.log(`progress ${progress}`)
});
child.on('completed',()=>{
    console.log("completed")
});

child.start()


