module.exports = class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;    
        this.lineItems = [];    
    }

    addItem(item, quantity) {
        this.items.push(item);
        const lineItemPrice = item.price * quantity;
        this.lineItems.push({item: item.name, quantity: quantity, price: lineItemPrice});
        this.totalPrice += item.price * quantity;
    }

    itemQuantities() {
        let itemQuantities = this.lineItems.map(lineItem => `${lineItem.item} - x${lineItem.quantity}`);
        return itemQuantities;
    }

    itemizedList() {
        let itemizedList = this.lineItems.map(lineItem => `${lineItem.item} x${lineItem.quantity} - $${lineItem.price}.00`)
        return itemizedList;
    }
}
