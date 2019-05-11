import React from 'react';

const dropDownButton = ({ headerIsActive, handleDropDown, dropDown, title, id, dropDownGender }) => {
    
    const ArrowOrMinus = ({ dropDown, gender, componentGender }) => {
        if (dropDown && gender === componentGender) {
            return (<h5 className="minus"> &minus;</h5>);
        } else {
            return (<h5 className="down-arrow">&#9660;</h5>);
        }
    };

    return (
        <>
        <div className={(headerIsActive ? "a-header-button" : "u-header-button") + " nav-link"}
            onClick={() => handleDropDown(id)}>
            <h2>{title}</h2>
            <ArrowOrMinus dropDown={dropDown} gender={dropDownGender} componentGender={id}/>
        </div>
        </>
    )
};

export default dropDownButton;