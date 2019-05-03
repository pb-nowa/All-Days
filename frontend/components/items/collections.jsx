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
                return (<Item item={item} key={`${item.id}`} />)
            });

            return (
                <ul>
                    {items}
                </ul>
            )
        }
        
        const items = this.props.items ? populateItems() : (<div>ITEMS WERE NOT SET</div>);
        
        return(
            <div>
                <div className="items-header">
                    <h1>SHOES</h1>
                </div>
                <div className="filter-header">
                    <div>Results</div>
                    <ul className="filter-nav">
                        <li>Size</li>
                        <li>Hue</li>
                        <li>Style</li>
                        <li>Material</li>
                    </ul>
                </div>
                <div className="items-body">
                    {items}
                </div>
            </div>
        )
    }
}

export default Collections;