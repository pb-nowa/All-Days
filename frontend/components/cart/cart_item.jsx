import React from 'react';

class CartItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="cart-item-container">
                <div className="cart-item-image-container">
                    <img src="" alt="shoe"/>
                </div>
                <div className="cart-item-info">
                    <div>
                        <h2>Shoe Name</h2>
                        <h3>Color</h3>
                        <h3>Size : 5</h3>
                    </div>
                    <div className="quantity-container">
                        <div className="quantity-buttons">
                            <div className="change-quantity">-</div>
                            <div className="quantity-integer">1</div>
                            <div className="change-quantity">+</div>
                        </div>
                    </div>
                </div>
                <div className="cart-item-back-container">
                    <div className="cart-item-back">
                        <div className="exit">X</div>
                        <div>$95</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;