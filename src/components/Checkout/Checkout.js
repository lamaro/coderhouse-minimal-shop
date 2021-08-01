import React from 'react'
import styles from './Checkout.module.css'
import { Link } from 'react-router-dom'
import SectionHeader from '../SectionHeader/SectionHeader'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = ({ cart, getCartTotal, placeOrder }) => {

    return (
        <>
            <SectionHeader title={`Checkout`} description={`Last step`} />
            <div className="inner">
                <div className="grid">
                    <div className={`col_8 mb_col_12`}>
                        <h2>Complete the form</h2>
                        <div className={styles.form_wrapper}>
                            <CheckoutForm handleSubmit={placeOrder} />
                        </div>
                    </div>
                    <aside className={`col_4 mb_col_12 ${styles.resume_wrapper}`}>
                        <h2>Items in cart</h2>
                        <ul>
                            {cart.map(({ item: { id, title, price }, quantity }) =>
                                <li key={id}><span>{quantity} x {title} (Ξ{price})</span> <span>Ξ{(price * quantity).toFixed(2)}</span></li>
                            )}
                        </ul>
                        <div className="totals">
                            <p>Total: Ξ{getCartTotal().toFixed(2)}</p>
                        </div>
                    </aside>
                </div>
                <div className={styles.actions}>
                    <Link to={`/cart`}>
                        <span><i className="far fa-hand-point-left"></i>Back to cart</span>
                    </Link>
                    <button form='my-form'>Place order</button>
                </div>
            </div>
        </>
    )
}

export default Checkout
