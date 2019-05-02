import React from 'react';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.items;
    }

    render() {
        return (
            <div>THIS IS ITEMS</div>
        );
    }
}

export default Collections;