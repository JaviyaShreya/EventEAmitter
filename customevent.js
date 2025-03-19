const EventEmitter = require('events');

// OrderSystem class inheriting from EventEmitter
class OrderSystem extends EventEmitter {
    constructor() {
        super();
    }

    placeOrder(orderId) {
        console.log(`Order ${orderId} has been placed.`);
        this.emit('orderPlaced', orderId);
    }

    payment(orderId) {
        console.log(`Processing payment for order ${orderId}...`);
        setTimeout(() => {
            console.log(`Payment for order ${orderId} completed.`);
            this.emit('paymentProcessed', orderId);
        }, 2000);
    }

    shipOrder(orderId) {
        console.log(`Shipping order ${orderId}...`);
        setTimeout(() => {
            console.log(`Order ${orderId} has been shipped.`);
            this.emit('orderShipped', orderId);
        }, 3000);
    }
}

// Create an instance of OrderSystem
const orderSystem = new OrderSystem();

// Register event listeners
orderSystem.on('orderPlaced', (orderId) => {
    console.log(` Order ${orderId} received. Processing payment...`);
    orderSystem.payment(orderId);
});

orderSystem.on('paymentProcessed', (orderId) => {
    console.log(` Payment confirmed for order ${orderId}. Preparing shipment...`);
    orderSystem.shipOrder(orderId);
});

orderSystem.on('orderShipped', (orderId) => {
    console.log(` Order ${orderId} has been successfully shipped! `);
});

// Simulate placing an order
orderSystem.placeOrder(101);
