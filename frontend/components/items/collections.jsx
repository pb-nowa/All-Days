
import React from 'react';
import Item from './item';
import Filter from './filter';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openFilter: false,
            filters: {},
            items: []
        };

        this.filterItems = this.filterItems.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchItems(id); 
        //how do i get the state to reflect the initial props, react is warning me not to user props to define state?
        this.setState( (state, { items }) => ({
            items: items,
        }));
        
    }

    componentDidUpdate(prevProps) {
        //how do i update items with ajax request if component isnt nmounted agoin when location changes
        
        const id = this.props.match.params.id;
        if (this.props.location.hash !== prevProps.location.hash) {
            this.props.fetchItems(id);
        }
    }

    filterItems(){
        this.setState((state, props) => {
            const filters = this.state.filters;
            const items = this.props.items;
            const filteredItems = items.filter(item => {
                return Object.keys(filters).every(key => filters[key] === item[key]);
            });

            return ({
                items: filteredItems
            });
        });
    }

    addFilter(k, v){
        this.setState(state => {
            const newFilters = Object.assign({}, state.filters, { [k]: v });
            return ({ filters: newFilters });
        },  this.filterItems
        );
    }

    clearFilters(){
        this.setState(state => ({
            filters: {}
        }), this.filterItems
        );
    }

    handleDropdown(){
        this.setState(state => ({
            openFilter: !state.openFilter
        }));
    }
    
    render() {
        console.log(this.state);
        console.log(this.props);
        const populateItems = () => {
            const items = this.props.items.map(item => {
            return (
                <Item item={item} key={`${item.id}`} />)
            });
            

            return (
                <ul>
                    {items}
                </ul>
            )
        }
        
        const items = this.props.items.length ? populateItems() : (<div>ITEMS WERE NOT SET</div>);
        
        return(
            <div>
                <div className="img-header">
                    <h1>SHOES</h1>
                </div>

                <div className="items-body">
                    <div className="filter-header">
                        <div>All - {`${this.state.items.length}`} Results</div>
                        <div className="filter-nav">
                            <div onClick={this.clearFilters} 
                                className={ !!Object.keys(this.state.filters).length ? "clear-filters" : "clear-filters-invisible"}
                                >CLEAR FILTERS
                            </div>
                            <ul onClick={this.handleDropdown}>
                                <li>Size</li>
                                <li>Color</li>
                                <li>Style</li>
                                <li>Material</li>
                            </ul>
                        </div>
                    </div>
                    <div className={(this.state.openFilter ? "open-filter-dropdown" : "close-filter-dropdown") + " filter-dropdown"}>
                        <Filter key="size" id="size" name="Size" options={[8,9,10,11,12]} addFilter={this.addFilter}/>
                        <Filter key="color" id="color" name="Color" options={["Grey", "Blue", "Brown", "Black"]} addFilter={this.addFilter}/>
                        <Filter key="style" id="style" name="Style" options={["Runner", "Topper", "Lounger"]} addFilter={this.addFilter}/>
                        <Filter key="material" id="material" name="Material" options={["Tree", "Wool"]} addFilter={this.addFilter}/>
                    </div>
                    {items}

                </div>
            </div>
        )
    }
}

export default Collections;