class Cart {
    constructor() {
        this.totalPrice = 0;
        this.items = [];
        this.order = [];
    }

    addItem(item, quantity) {
        this.items.push(item);
        this.order.push({
            name: item.name,
            quantity: quantity,
            price: item.price,
            onSale: item.onSale
        });

        this.totalPrice += item.price * quantity;
    }

    itemizedList() {
        return this.order.map((item) => {
            return `${item.name} x${item.quantity} - $${item.price}`;
        })
    }

    itemQuantities() {
        return this.order.map((item) => {
            return `${item.name} - x${item.quantity}`;
        })
    }

    onSaleItems() {
        return this.order.filter(item => item.onSale).map(item => `${item.name} x${item.quantity} - $${item.price}`);
    }

}

module.exports = Cart;
