import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="cart">
                <div>
                    <h2>CART</h2>
                    <div>Click to Close</div>
                </div>
                <ul>
                    <li>cart item component</li>
                    <li>cart item component</li>
                    <li>cart item component</li>
                </ul>
                <div>Looking for something else?</div>
                <Link to={'/collections/mens'}>Keep Shopping</Link>
                <div>
                    <div>
                        <h3>Subtotal</h3>
                        <div>Cost var</div>
                    </div>
                    <div>
                        <h3>Shipping</h3>
                        <div>FREE</div>
                    </div>
                    <input type="button" value="CHECKOUT"/>
                </div>
                <div>
                    <p>Looking for more shoes?</p>
                    <p>Click <Link to={'colelctions/mens'}>here</Link></p>
                </div>
            </div>
        )
    }
}

export default Cart;