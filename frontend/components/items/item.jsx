import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropDown: false
        };
        this.handleSizeDropdown = this.handleSizeDropdown.bind(this);
    }

    handleSizeDropdown(){
        this.setState(state => {
            return ({
                dropDown: !state.dropDown,
            });
        });
    }

    render(){
        const { item } = this.props;
        return (
            <div className="item">
                <div className="item-photo">MISSING PHOTO</div>
                <div className="item-photo-header">
                    <h3>{item.name}</h3>
                    <div>${item.price}</div>
                </div>
                <div className="item-info">{item.color}</div>
                <div className="select-size" onClick={this.handleSizeDropdown}>
                    <div>Select Size</div>
                    <div className="plus">+</div>
                </div>
                <div className={"size-selections " + (this.state.dropDown ? "unhidden-size-selection" : "hidden-size-selection")}>
                    <ol className="size-selections-container">
                        <li className="size"><h4>8</h4></li>
                        <li className="size"><h4>9</h4></li>
                        <li className="size"><h4>10</h4></li>
                        <li className="size"><h4>11</h4></li>
                        <li className="size"><h4>12</h4></li>
                        <li className="size"><h4>13</h4></li>
                    </ol>
                </div>

            </div>
        )
    }
}

export default Item;