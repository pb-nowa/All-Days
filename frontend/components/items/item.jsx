import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="item">
            ITEM NAME:
           {item.name}
           COLOR: 
           {item.color}
           PRICE:
           {item.price}
        </div>
    )
}

export default Item;