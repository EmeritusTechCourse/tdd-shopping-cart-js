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

    it('should add a single item', () => {
        // setup
        const cart = new Cart()
        const expected = 10000;

        // exercise
        const item = new Item('Watch', 10000, false);
        cart.addItem(item, 1);

        // assert
        expect(cart.totalPrice).to.equal(expected);
    })

    it('should add a multiple items', () => {
        // setup
        const cart = new Cart()
        const expected = 20000;

        // exercise
        const item = new Item('Watch', 10000, false);
        cart.addItem(item, 2);

        // assert
        expect(cart.totalPrice).to.equal(expected);
    })

    it('should only allow Items to be inserted', () => {
        // setup
        const cart = new Cart()
        const expected = 20000;

        // exercise
        let ex;
        try {
            cart.addItem(7, 2);
        } catch(err) {
            ex = err;
        }

        // assert
        expect(ex instanceof Error).to.equal(true);
    })
})