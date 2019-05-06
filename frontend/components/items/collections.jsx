
import React from 'react';
import Item from './item';
import Filter from './filter';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openFilter: false,
            filters: {},
        };

        this.filterItems = this.filterItems.bind(this);
    }
    
    componentDidMount() {
        this.id = this.props.match.params.id;
        this.props.fetchItems(this.id); 
        //how do i get the state to reflect the initial props, react is warning me not to user props to define state?
        this.setState( (state, props) => ({
            items: props.items,
        }));
    }

    componentDidUpdate(prevProps) {
        //how do i update items with ajax request if component isnt nmounted agoin when location changes
        const id = this.props.match.params.id;
        if (this.props.location !== prevProps.location) {
            this.id = id;
            this.props.fetchItems(this.id);
        }
    }

    filterItems(){
        this.setState((state) => {
            const filters = state.filters;
            const items = state.items || {};
            const filteredItems = items.filter(item => {
                return Object.keys(filters).every(key => filters[key] === item[key]);
            });
            return ({
                items: filteredItems
            });
        });
    }
    
    render() {
        const populateItems = () => {
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
                <div className="img-header">
                    <h1>SHOES</h1>
                </div>

                <div className="items-body">
                    <div className="filter-header">
                        <div>All - {`${items.length}`} Results</div>
                        <ul className="filter-nav">
                            <Filter toggleItem={this.toggleSelected} key="size" id="size" name="Size" options={[8,9,10,11,12]}/>
                            <Filter toggleItem={this.toggleSelected} key="color" id="color" name="Color" options={["Grey", "Blue", "Brown", "Black"]}/>
                            <Filter toggleItem={this.toggleSelected} key="style" id="style" name="Style" options={["Runner", "Topper", "Lounger"]}/>
                            <Filter toggleItem={this.toggleSelected} key="material" id="material" name="Material" options={["Tree", "Wool"]}/>
                        </ul>
                    </div>
                    {items}

                </div>
            </div>
        )
    }
}

export default Collections;