import React from 'react';

class Filter extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        const options = this.props.options.map( option => (
            <li id={option} key={option}>{option}</li>
        ));
        return (
            <div className="filter-nav-item" 
            onClick={ () => (
                this.props.toggleItem(this.props.id)
                )}>
                <h3>{this.props.name}</h3>
                <ul>{options}</ul>
            </div>
        )
    }
}

export default Filter;

