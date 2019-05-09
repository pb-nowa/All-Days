import React from 'react';
const ShoesHeader = ({ gender }) => {
    if (gender === "mens") {
        return (
            <div>
                <div className="items-header-title-container">
                    <h1 className="items-header-title">MEN'S SHOES</h1>
                </div>
                <img className="img-header-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/Collections_Lounger_Men.jpg" alt="" />
            </div>
        )
    } else {
        return (
            <div>
                <div className="items-header-title-container">
                    <h1 className="items-header-title">WOMEN'S SHOES</h1>
                </div>
                <img className="img-header-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/Collections_Lounger_Women.jpg" alt="" />
            </div>
        )
    }
};

export default ShoesHeader;