import React, { useState, createContext } from 'react'

const CartContext = createContext();

const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue)

    const isInCart = id =>
        cart.find(product => product.item.id === id) || false;

    const getTotalItemsInCart = () =>
        cart.length > 0 ? cart.reduce((total, item) => total + item.quantity, 0) : 0

    const addToCart = productToAdd => { //to be improved...
        const alreadyExists = isInCart(productToAdd.item.id)
        if (!alreadyExists && productToAdd.item.id) {
            setCart([...cart, productToAdd]);
        } else {
            const { quantity } = alreadyExists;
            const cartWithOutProduct = cart.filter(productToRemove => productToRemove.item.id !== productToAdd.item.id);
            setCart([...cartWithOutProduct, { ...productToAdd, quantity: productToAdd.quantity + quantity }]);
        }
    }

    const updateQty = productToAdd =>
        setCart(cart.map(product => product.item.id === productToAdd.item.id ? productToAdd : product));

    const removeItem = id =>
        setCart(cart.filter(productToRemove => productToRemove.item.id !== id))

    const getCartTotal = () =>
        cart.reduce((total, current) => total + current.item.price * current.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, isInCart, addToCart, getTotalItemsInCart, updateQty, getCartTotal, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }
