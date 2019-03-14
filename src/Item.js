class Item {
  constructor(name, price, onSale) {
    this.name = name;
    this.price = price.toFixed(2);
    this.onSale = onSale;
  }
}

module.exports = Item;
