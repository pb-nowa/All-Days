import React from 'react';

const CartItem = props => {
    return(
        <div className="cart-item-container">
            <div className="cart-item-image-container">
                <img src="" alt="shoe"/>
            </div>
            <div className="cart-item-info">
                <h2>Shoe Name</h2>
                <h3>Color</h3>
                <h3>Size : 5</h3>
                <div className="quantity-container">
                    <div className="quantity-buttons">
                        <div className="change-quantity">-</div>
                        <div className="quantity-integer">1</div>
                        <div className="change-quantity">+</div>
                    </div>
                </div>
            </div>
            <div className="cart-item-back">
                <div>X</div>
                <div>$95</div>
            </div>
        </div>
    )
}

export default CartItem;