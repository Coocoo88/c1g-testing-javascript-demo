const Cart = require("../src/Cart");

test("Berechnet den Gesamtpreis korrekt", () => {
    const cart = new Cart();
    cart.addProductById(1); // Laptop hinzufügen (999€)
    cart.addProductById(2); // Maus hinzufügen (25€)
    expect(cart.calculateTotalPrice()).toBe(999 + 25);
});

test("Erhöht die Anzahl eines Produkts", () => {
    const cart = new Cart();
    cart.addProductById(1);
    cart.increaseQuantity(1);
    expect(cart.products.find(p => p.id === 1).quantity).toBe(2);
});

test("Verringert die Anzahl eines Produkts", () => {
    const cart = new Cart();
    cart.addProductById(1);
    cart.increaseQuantity(1);
    cart.decreaseQuantity(1);
    expect(cart.products.find(p => p.id === 1).quantity).toBe(1);
});

test("Entfernt ein Produkt aus dem Warenkorb", () => {
    const cart = new Cart();
    cart.addProductById(1);
    cart.removeItem(1);
    expect(cart.products.find(p => p.id === 1)).toBeUndefined();
});

test("Waren Korb korrekt zurücksetzen", ()=>{
    const cart = new Cart();
    cart.addProductById(1);
    cart.clearCart();
    expect(cart.products).toHaveLength(0);
});

test("Berechnet den 10% Rabatt korrekt", ()=>{
    const cart = new Cart();
    const total = (100);
    cart.applyDiscount("SAVE10");
    expect(cart.discount).toBe(10);
});

test("Berechnet den 20% Rabatt korrekt", ()=>{
    const cart = new Cart();
    const total = (100);
    cart.applyDiscount("SAVE20");
    expect(cart.discount).toBe(20);
});