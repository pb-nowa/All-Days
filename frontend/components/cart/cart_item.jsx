import React from 'react';

class CartItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: 1,
        };
        this.addQuantity = this.addQuantity.bind(this);
        this.removeQuantity = this.removeQuantity.bind(this);
    }

    addQuantity(){
        const quantity = this.state.quantity + 1;
        this.setState({
            quantity
        });
    }

    removeQuantity(){
        let quantity = this.state.quantity;
        if (quantity > 1) quantity--;
        this.setState({
            quantity
        });
    }

    render(){
        const { quantity } = this.state;
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
                            <div onClick={this.removeQuantity} className="change-quantity">-</div>
                            <div className="quantity-integer">{`${quantity}`}</div>
                            <div onClick={this.addQuantity} className="change-quantity">+</div>
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