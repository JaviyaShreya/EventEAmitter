
const EventEmitter=require("node:events")
const e=new EventEmitter()


//on event(event,listner)
// e.on('order food',(food,drink)=>{
//    console.log(`Order received for ${food} and ${drink}`)
// })

// e.on('order food',(food,drink)=>{
//    console.log("This is once in event emitter")
// })

// e.emit("order food","Burger","Pepsi")


// // removing listner of an event
// let g1 =(msg)=>{
//    console.log("this is g1"+msg)
// }

// let g2=(msg)=>{
//    console.log("this is g2"+msg)
// }
// e.emit('my event','hello')

// e.on('my event',g1)
// e.on('my event',g1)
// e.on('my event',g2)

// e.removeListener('my event',g1)

// e.removeAllListeners('my event')


// // using once
// e.once('connect',()=>{
//     console.log("Connected")
// })
// e.emit('connect')//connected
// e.emit('connect')//no output


// // using prependListener
// e.on('my event',()=>{
//     console.log("this is on listener")
// })

// e.prependListener('my event',()=>{
//     console.log("this is prepend listener")
// })

// e.emit('my event')


// using prependOnceListener
e.on('my event',()=>{       
    console.log("this is on listener")
})
e.on('my event',()=>{
    console.log("this is on listener2")
})
e.prependOnceListener('my event',()=>{
    console.log("this is prepend once listener")
})
e.emit('my event')
e.emit('my event')


//adding listner to event
e.addListener('my event',(name)=>{
    console.log(`Hello ${name}`)
})
e.emit('my event','John')

//remove all listner of an event 

e.on('my event',()=>{
    console.log("data received")
})
e.on('my event',()=>{
    console,log("data processed")
})

e.removeAllListeners('my event')
e.emit('my event')//no output



//listner count
e.on('my event',()=>{
    console.log("data sent")
})
e.on('my event',()=>{
    console.log("data received")
})
e.on('my event',()=>{    
    console.log("data processed")
})
console.log(e.listenerCount('my event'))//3


//event names
e.on('my event',()=>{
    console.log("this is my event")
})
e.on('data',()=>{
    console.log("this is data")
})
console.log(e.eventNames())//['my event']