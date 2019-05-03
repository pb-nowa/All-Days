import React from 'react';
import Item from './item';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.items;
    }
    
    componentDidMount() {
        this.id = this.props.match.params.id;
        this.props.fetchItems(this.id);
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;
        if (id !== this.id) {
            this.id = id;
            this.props.fetchItems(this.id);
        }
    }
    
    render() {
        const populateItems = () => {
            console.log("Populate items called");
            const items = Object.values(this.props.items).map(item => {
                return (<Item item={item} key={`${item.id}-${}`} />)
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
        
        const items = this.props.items ? populateItems() : (<div>ITEMS WERE NOT SET</div>);
        
        return(
            <div>
                {items}
            </div>
        )
    }
}

export default Collections;