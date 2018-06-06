const Item = require('./Item.js');

module.exports = class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item, quantity) {
        if(item instanceof Item === false) throw new Error('Not and item!');
        this.totalPrice += item.price * quantity;
    }
}
