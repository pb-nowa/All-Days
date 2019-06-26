import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { open, handleCartOpen, items } = this.props;

        const cartItems = items.map( item => {
            return <CartItem item={item} key={`${item.id}-${item.size}`}/>
        })
        return(
        <div className={ open ? "cart-page-container open-cart" : "cart-page-container closed-cart"}>
            <div className={open ? "cart-container in-front open-container" : "cart-container closed-cart"}>
                <div className={open ? "overlay-visible open-cart" : "closed-cart"}></div>
                <div className={ open ? "cart-sidebar in-front" : "cart-sidebar closed-cart"}>
                    <div>
                        <div className="cart-header">
                            <h2>CART</h2>
                            <div onClick={handleCartOpen} className="cart-close-button">close</div>
                        </div>
                        <ul className="cart-items">
                            {cartItems}
                        </ul>
                    </div>
                    <div>
                        <div className="divider">Looking for something else?
                            &nbsp;
                            <Link className="shopping-link" to={'/collections/mens'}>Keep Shopping</Link>
                        </div>
                        <div className="cart-totals">
                            <div className="cart-costs">
                                <h3>Subtotal</h3>
                                <div>Cost var</div>
                            </div>
                            <div className="cart-costs">
                                <h3>Shipping</h3>
                                <div>FREE</div>
                            </div>
                            <input className="cart-button" type="button" value="CHECKOUT"/>
                        </div>
                        <div className="cart-footer">
                            <p>Looking for more shoes?</p>&nbsp;
                            <p>Click <Link className="shopping-link" to={'/collections/mens'}>here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cart;