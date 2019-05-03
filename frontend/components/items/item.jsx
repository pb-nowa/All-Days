import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="item-photo">MISSING PHOTO</div>
            <div className="item-photo-header">
                <h3>{item.name}</h3>
                <div>${item.price}</div>
            </div>
            <div className="item-info">{item.color}</div>
            <div className="select-size">
                <div>Select Size</div>
                <div className="plus">+</div>
            </div>

        </div>
    )
}

export default Item;