import React, { useState, createContext } from 'react'

const CartContext = createContext();

const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue)

    const findInCart = id =>
        cart.find(product => product.item.id === id);

    const isInCart = id =>
        findInCart(id) || false;

    const getTotalItemsInCart = () =>
        cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : 0

    const addToCart = productToAdd => {
        const alreadyExists = isInCart(productToAdd.item.id)
        if (!alreadyExists && productToAdd.item.id) {
            setCart([...cart, productToAdd]);
        } else {
            const { quantity } = alreadyExists;
            const cartWithOutProduct = cart.filter(productToRemove => productToRemove.item.id !== productToAdd.item.id);
            setCart([...cartWithOutProduct, { ...productToAdd, quantity: productToAdd.quantity + quantity }]);
        }
    }

    return (
        <CartContext.Provider value={{ cart, isInCart, addToCart, getTotalItemsInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
