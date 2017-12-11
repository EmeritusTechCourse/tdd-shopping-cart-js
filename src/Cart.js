module.exports = class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item, quantity) {
        this.items.push(item);
        this.totalPrice += item.price * quantity;
    }
}
