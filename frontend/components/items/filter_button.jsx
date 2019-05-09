import React from 'react';
import ArrowOrMinus from './arrow_minus_icon';

class FilterButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        const handleFilterAttrs = this.props.handleFilterAttrs;
        const name = this.props.name;
        const id = this.props.id;
        const options = this.props.options;
        const whichFilter = this.props.whichFilter;
        const openFilter = this.props.openFilter;
        const currentOpenFilter = this.props.currentOpenFilter;
        const clearThisFilter = this.props.clearThisFilter;
        
        return(
            <div className="filter-buttons-container">
                <h2
                    onClick={handleFilterAttrs(name, id, options)}
                    >{ whichFilter || name }
                </h2>
                <ArrowOrMinus 
                    openFilter={openFilter} 
                    whichFilter={whichFilter} 
                    name={name}
                    id={id} 
                    options={options}
                    currentOpenFilter={currentOpenFilter}
                    clearThisFilter={clearThisFilter}
                    handleFilterAttrs={handleFilterAttrs}/>
            </div>
        )

    }
}

export default FilterButton;