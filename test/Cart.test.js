const Cart = require('../src/Cart.js');
const Item = require('../src/Item');

describe('Cart', () => {
    let cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('should initialize as empty', () => {
        // const cart = new Cart();

        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
    });

    test('should add items to cart', () => {
        // const cart = new Cart();
        const hat = new Item('hat', 40, false);

        cart.addItem(hat, 2);
        expect(cart.totalPrice).toEqual(80);
        expect(cart.items.length).toEqual(1);
    });

    test('should return itemized list', () => {
        // const cart = new Cart();
        const shoes = new Item('shoes', 80, false);
        const coat = new Item('coat', 200, false);

        cart.addItem(shoes, 1);
        cart.addItem(coat, 1);

        const expected = ['shoes x1 - $80.00', 'coat x1 - $200.00'];

        expect(cart.itemizedList()).toEqual(expected);
    });

    test('should return array of item quantities', () => {
        // const cart = new Cart();
        const shoes = new Item('shoes', 80, false);
        const coat = new Item('coat', 200, false);

        cart.addItem(shoes, 1);
        cart.addItem(coat, 1);

        const expected = ['shoes - x1', 'coat - x1'];

        expect(cart.itemQuantities()).toEqual(expected);
    });

    test('should return array of sale items', () => {
        // const cart = new Cart();
        const shoes = new Item('shoes', 60, true);
        const coat = new Item('coat', 200, false);

        cart.addItem(shoes, 1);
        cart.addItem(coat, 1);

        const expected = ['shoes x1 - $60.00'];

        expect(cart.onSaleItems()).toEqual(expected);
    });
});
