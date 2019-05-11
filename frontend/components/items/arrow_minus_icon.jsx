import React from 'react';

const ArrowOrMinus = ({ openFilter, currentOpenFilter, name, id, options, clearThisFilter, whichFilter, handleFilterAttrs }) => {

    if (whichFilter) {
        return (
            <h5 
                className="X"
                onClick={() => clearThisFilter(id)}
            >&#10005;
            </h5>
        );

    } else if (openFilter && currentOpenFilter === name) {
        return (
            <h5
                className="minus"
                onClick={handleFilterAttrs(name, id, options)}
            >&minus;
            </h5>
        );

    } else {
        return (
            <h5
                className="down-arrow"
                onClick={handleFilterAttrs(name, id, options)}
            >&#9660;
            </h5>
        );
    }
}

export default ArrowOrMinus;