import React from 'react'
import styles from './Cart.module.css'
import CartItemCount from '../CartItemCount/CartItemCount'
import { Link } from 'react-router-dom'

const CartRow = ({ product, onEdit, onDelete }) => {

    return (
        <div key={product.item.id} className={styles.cart_product_row}>
            <span><Link to={`/item/${product.item.id}`}>{product.item.title}</Link></span>
            <span>{product.item.price}</span>
            <span>{product.quantity} (Ξ{(product.item.price * product.quantity).toFixed(2)})</span>
            <div className={styles.actions}>
                <CartItemCount item={product.item} stock={10} initial={product.quantity} onEdit={onEdit} onDelete={onDelete} />

                <i
                    onClick={() => onDelete(product.item.id)}
                    className="fas fa-trash">
                </i>
            </div>
        </div>
    )
}

const Cart = ({ updateQty, cart, getCartTotal, removeItem }) => {
    return (
        <div>
            <div className={styles.cart_table}>
                <div className={styles.cart_product_row}>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Actions</span>
                </div>
                {
                    cart.map(product =>
                        <CartRow key={product.item.id} product={product} onEdit={updateQty} onDelete={removeItem} />)
                }
            </div>
            <div className={styles.cart_totals}>
                <p><strong>Total:</strong> Ξ{getCartTotal().toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart
