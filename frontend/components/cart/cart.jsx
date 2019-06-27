import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            subtotal: 0,
            quantity: [],
        };
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    componentDidMount(){
        const { items } = this.props;
        if (items.length) {
            const subtotal = items.reduce((total, item) => item.price + total);
            this.setState({
                subtotal
            });
        }
    }

    componentDidUpdate(prevProps, prevState){
        const { items } = this.props;
        if (items.length !== prevProps.items.length) {
            let subtotal = 0;
            items.forEach( item => {
                subtotal += item.price;
            });
            this.setState({ subtotal });

            const quantity = Array.from(this.state.quantity)
            quantity.push(1);
            this.setState({ quantity });
        }
    }

    updateQuantity(idx, val){
        let quantity = Array.from(this.state.quantity);
        
        quantity[idx] = val;
        this.setState(() => ({ quantity }));
        
        const { items } = this.props;

        let subtotal = 0;
        items.forEach( (item, i) => {
            subtotal = item.price * quantity[i] + subtotal;
        });
        this.setState(() => ({ subtotal }));
    }

    render(){
        const { open, handleCartOpen, items } = this.props;
        const { subtotal } = this.state;

        const cartItems = items.map( (item, i) => {
            return <CartItem 
                item={item} 
                key={`${item.id}-${item.size}`} 
                index={i} 
                updateQuantity={this.updateQuantity}
                />
        });
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
                                <div>${subtotal}</div>
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