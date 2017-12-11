const Cart = require('../src/Cart.js');
const expect = require('chai').expect;

describe('Cart', () => {
    it('should initialize as empty', () => {
        const cart = new Cart()

        expect(cart.items).to.deep.equal([])
        expect(cart.totalPrice).to.be.equal(0)
    })


    // Given I have an empty cart, when I add an Item, then I expect
    // to see totalPrice reflect the sum of all the Items in my cart,
    // times the quantities of each item.

    it('should know the total price of items in my cart', () => {
        // Setup
        const cart = new Cart();
        
        // Exercise

        // Assert
    })

})