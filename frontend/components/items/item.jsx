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
            <div className="size-selections">
                <ol className="size-selections-container">
                    <li className="size">8</li>
                    <li className="size">9</li>
                    <li className="size">10</li>
                    <li className="size">11</li>
                    <li className="size">12</li>
                </ol>
            </div>

        </div>
    )
}

export default Item;