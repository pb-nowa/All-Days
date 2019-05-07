
import React from 'react';
import Item from './item';
import Filter from './filter';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openFilter: false,
            filters: {},
            items: [],
            filterAttributes: {
                filterName: "",
                filterId: "",
                filterOptions: [],
            }
        };

        this.filterItems = this.filterItems.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleFilterAttrs = this.handleFilterAttrs.bind(this);
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        
        this.props.fetchItems(id).then((data) =>{
            this.setState({
                items: Object.values(data.items),
            });
        });
    }

    componentDidUpdate(prevProps) {        
        const id = this.props.match.params.id;
        if (this.props.location.hash !== prevProps.location.hash) {
            this.props.fetchItems(id);
        }
    }

    filterItems(){
        this.setState((state, props) => {
            const filters = state.filters;
            const items = props.items;
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
        this.setState(state => {
            return ({ openFilter: !state.openFilter });
        });
    }

    handleFilterAttrs(name, id, ...options){
        this.setState(() => {
            const newFilterAttrs = {
                filterName: name,
                filterId: id,
                filterOptions: options
            };
            return({ filterAttributes: newFilterAttrs });
        });
    }
    
    render() {
        const filterAttrs = this.state.filterAttributes;
        const { filterName, filterId, filterOptions } = filterAttrs;

        const populateItems = () => {
            const items = this.state.items.map(item => {
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
                    <img className="img-header-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/Collections_Lounger_Men.jpg" alt="" />
                </div>

                <div className="items-body">
                    <div className="filter-header">
                        <div>All - {`${this.state.items.length}`} Results</div>
                        <div className="filter-nav">
                            <div onClick={this.clearFilters} 
                                className={ !!(Object.keys(this.state.filters).length) ? "clear-filters" : "clear-filters-invisible"}
                                >CLEAR FILTERS
                            </div>
                            <ul onClick={this.handleDropdown} className="filter-attributes">
                                <li onClick={() => this.handleFilterAttrs("Size", "size", 8, 9, 10, 11, 12)}>{this.state.filters.size || "Size"}</li>
                                <li onClick={() => this.handleFilterAttrs("Color", "color", "Grey", "Blue", "Brown", "Black")}>{this.state.filters.color || "Color"}</li>
                                <li onClick={() => this.handleFilterAttrs("Style", "style", "Runner", "Topper", "Lounger")}>{this.state.filters.style || "Style"}</li>
                                <li onClick={() => this.handleFilterAttrs("Material", "material", "Tree", "Wool")}>{this.state.filters.material || "Material"}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={(this.state.openFilter ? "open-filter-dropdown" : "close-filter-dropdown") + " filter-dropdown"}>
                        <Filter name={filterName} id={filterId} options={filterOptions} addFilter={this.addFilter}/>
                    </div>
                    {items}

                </div>
            </div>
        )
    }
}

export default Collections;