import React from 'react';

class Filter extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        const options = this.props.options.map( option => (
            <li onClick={() => this.props.addFilter(this.props.id, option)}id={option} key={option}>{option}</li>
        ));
        return (
            <div className="filter-nav-item">
                <ul className="filter-nav-items-container">{options}</ul>
            </div>
        )
    }
}

export default Filter;

