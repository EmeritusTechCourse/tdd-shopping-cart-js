const Cart = require('../src/Cart.js');
const Item = require('../src/Item');
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
        const handbag = new Item('Handbag', 500.00, false);
        
        // Exercise
        cart.addItem(handbag, 2);

        // Assert
        expect(cart.totalPrice).to.be.equal(1000.00);
    })

    // Given I have an empty cart, when I add more than one of an item,
    // then I expect itemQuantities() to show the number of items I have 
    // added.

    it('should know the quantities of each item in my cart', () => {
        // Setup
        const cart = new Cart();
        const handbag = new Item('Handbag', 500.00, false);
        const pumps = new Item('Pumps', 450.00, false);
        const expected = ['Handbag - x3', 'Pumps - x2'];
        cart.addItem(handbag, 3);
        cart.addItem(pumps, 2);
    
        // Exercise
        const actual = cart.itemQuantities();

        // Assert
        expect(actual).to.deep.equal(expected);
    })

    // Given I have an empty cart, when I add items, then I expect
    // itemizedList() reflect the items I have added along with their
    // price and quantity.

    it('should return an itemized list', () => {
        // Setup
        const cart = new Cart();
        const handbag = new Item('Handbag', 500.00, false);
        const pumps = new Item('Pumps', 450.00, false);
        const expected = ['Handbag x3 - $1500.00', 'Pumps x2 - $900.00'];    
        cart.addItem(handbag, 3);
        cart.addItem(pumps, 2);
    
        // Exercise
        const actual = cart.itemizedList();

        // Assert
        expect(actual).to.deep.equal(expected);
    })

})