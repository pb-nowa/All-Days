import React from 'react';

class Filter extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        const options = this.props.options.map( option => (
            <li className={`${this.props.id}-dropdown-attributes`} 
                onClick={() => this.props.addFilter(this.props.id, option)}
                id={option} 
                key={option}
            ><h4>{option}</h4>
            </li>
        ));
        return (
            <div className="filter-nav-items">
                <ul className="filter-nav-items-container">{options}</ul>
            </div>
        )
    }
}

export default Filter;

