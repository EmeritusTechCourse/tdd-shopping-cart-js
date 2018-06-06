const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;

describe('Cart', () => {
    it('should initialize as empty', () => {
        // Setup & exercise
        const cart = new Cart()

        // Assert
        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    })

    it('should reflect total price', () => {
        // setup
        const cart = new Cart()
        const expected = 20000;

        // exercise
        const item = new Item('Watch', 10000, false);
        cart.addItem(item, 2);

        // assert
        expect(cart.totalPrice).to.equal(expected);
    })
})