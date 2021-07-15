import React, { useContext, useState } from 'react'
import Checkout from '../Checkout/Checkout'
import Waldo from '../Waldo/Waldo'
import { CartContext } from '../../contexts/CartContext';
import { getFirestore, getDate } from '../../utils/firebase'

const CheckoutContainer = () => {

    const cartContext = useContext(CartContext);
    const { cart, setCart, getCartTotal } = cartContext;

    const [orderCreated, setOrderCreated] = useState(false)

    const placeOrder = async buyerData => {

        try {
            const db = getFirestore();
            console.log(`order N ${buyerData.name}`)

            const cartItems = cart.map(({ item: { id, title, price }, quantity }) => {
                return { id, title, price, quantity }
            })

            const order = {
                buyer: buyerData,
                items: cartItems,
                date: getDate(),
                total: getCartTotal()
            }

            const res = await db.collection('orders').add(order);
            setCart([])
            setOrderCreated(res.id)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            {orderCreated ? <Waldo message={`Order Created (Order Id: ${orderCreated})...`} linkHome={true} /> : cart.length > 0 ? <Checkout cart={cart} getCartTotal={getCartTotal} placeOrder={placeOrder} /> : <Waldo message={`Nothing to checkout...`} linkHome={false} />}
        </div>
    )
}

export default CheckoutContainer
