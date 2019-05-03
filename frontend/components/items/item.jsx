import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="item">
            ITEM NAME:
           {item.name}
        </div>
    )
}

export default Item;