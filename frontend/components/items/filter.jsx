import React from 'react';

class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = props;
    }
    render () {

        return (
            <div className="filter-nav-item" 
            onClick={ () => (
                this.state.toggleItem(this.state.id)
                )}>
                <h3>{this.state.name}</h3>
                <div></div>
            </div>
        )
    }
}

export default Filter;

