
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
        this.addFilter = this.addFilter.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }
    
    componentDidMount() {
        this.id = this.props.match.params.id;
        this.props.fetchItems(this.id); 
        //how do i get the state to reflect the initial props, react is warning me not to user props to define state?
        this.setState( (state, props) => ({
            items: Object.values(props.items),
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
        this.setState((state, props) => {
            const filters = this.state.filters;
            const items = Object.values(this.props.items);
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
        },  this.filterItems()
        );
    }

    clearFilters(){
        this.setState(state => ({
            filters: {}
        }), this.filterItems()
        );
    }
    
    render() {
        console.log(this.state);

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
                        <div>
                            <div onClick={this.clearFilters}>CLEAR FILTERS</div>
                            <ul className="filter-nav">
                                <Filter key="size" id="size" name="Size" options={[8,9,10,11,12]} addFilter={this.addFilter}/>
                                <Filter key="color" id="color" name="Color" options={["Grey", "Blue", "Brown", "Black"]} addFilter={this.addFilter}/>
                                <Filter key="style" id="style" name="Style" options={["Runner", "Topper", "Lounger"]} addFilter={this.addFilter}/>
                                <Filter key="material" id="material" name="Material" options={["Tree", "Wool"]} addFilter={this.addFilter}/>
                            </ul>
                        </div>
                    </div>
                    {items}

                </div>
            </div>
        )
    }
}

export default Collections;