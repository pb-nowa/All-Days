import React from 'react';
import Item from './item';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.items;
        this.updateItems = this.updateItems.bind(this);
    }

    componentDidUpdate() {
        if (this.props.match.params.id !== this.id) {
            this.updateItems();
        }
    }
    
    componentDidMount() {
        this.id = this.props.match.params.id;
        this.updateItems();
    }

    updateItems() {
        console.log("UPDATING ITEMS");

        const id = this.props.match.params.id;
        const items = this.props.fetchItems(id);
        this.setState(items);
    }

    render() {
        console.log("RENDER IS CALLED");

        const item = () => {

            const items = this.state.map(item => {
                return (<Item item={item} key={item.id} />)
            });

            return (
                <div>
                    <h1>THIS IS ITEMS</h1>
                    <ul>
                        {items}
                    </ul>

                </div>
            )
        }

        console.log(this.state);
        return this.state ? item() : (<div>ITEMS WERE NOT SET</div>);
    }
}

export default Collections;