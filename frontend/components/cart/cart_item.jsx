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
        this.props.updateQuantity(this.props.index, quantity);
    }

    removeQuantity(){
        let quantity = this.state.quantity;
        if (quantity > 1) quantity--;
        this.setState({
            quantity
        });
        this.props.updateQuantity(this.props.index, quantity);
    }

    render(){
        const { quantity } = this.state;
        const { name, color, photoUrl, price, size } = this.props.item
        return(
            <div className="cart-item-container">
                <div className="cart-item-image-container">
                    <img className="cart-image" src={photoUrl} alt="shoe"/>
                </div>
                <div className="cart-item-info">
                    <div>
                        <h2>{name}</h2>
                        <h3>{color}</h3>
                        <h3>Size : {size}</h3>
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
                        <div className="exit">&#10005;</div>
                        <div>${price}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;