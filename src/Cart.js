module.exports = class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;    
        this.lineItems = [];    
    }

    addItem(item, quantity) {
        this.items.push(item);
        this.lineItems.push({item: item.name, quantity: quantity});
        this.totalPrice += item.price * quantity;
    }

    itemQuantities() {
        let itemQuantities = this.lineItems.map(lineItem => `${lineItem.item} - x${lineItem.quantity}`);
        return itemQuantities;
    }
}
