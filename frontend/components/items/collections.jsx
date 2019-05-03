import React from 'react';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.items;
        window.props = this.props;
    }

    componentDidUpdate() {
        const gender = this.props.match.params.id;
        this.props.fetchItems(gender);
    }
    
    componentDidMount() {
        const gender = this.props.match.params.id;
        this.props.fetchItems(gender);
    }

    render() {
        return (
            <div>THIS IS ITEMS</div>
        );
    }
}

export default Collections;