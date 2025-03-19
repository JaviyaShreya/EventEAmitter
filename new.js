const {EventEmitter} = require('events');
class New1 extends EventEmitter{
    sendMEssage(message){
        console.log(message);
        this.emit('message',message);
    }
    sendEmail(email){
        console.log(email);
        this.emit('email',email);
    }
}
const myEmitter = new New1();
myEmitter.on('event',(message)=>{
    console.log('an event occured!');
});
myEmitter.sendEmail("you have a new email");