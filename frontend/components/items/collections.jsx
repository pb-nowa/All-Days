import React from 'react';
import Item from './item';
import Filter from './filter';
import FilterButton from './filter_button';
import ShoesHeader from './shoes_header';
import Loading from '../loading';

class Collections extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            openFilter: false,
            filters: {},
            items: [],
            filterAttributes: {
                filterName: "",
                filterId: "",
                filterOptions: [],
            },
            shouldAnimate: false,
            itemsAnimate: true,
        };

        this.filterItems = this.filterItems.bind(this);
        this.addFilter = this.addFilter.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.clearThisFilter = this.clearThisFilter.bind(this);
        this.handleFilterAttrs = this.handleFilterAttrs.bind(this);
        this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
        this.clearGlobalAnimations = this.clearGlobalAnimations.bind(this);
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        
        this.props.fetchItems(id).then((data) => {
            this.setState({
                items: Object.values(data.items),
            });
        });
        window.setTimeout(() => {
            this.setState({ loading: false });
        }, 1500);
    }

    componentDidUpdate(prevProps) {        
        const id = this.props.match.params.id;
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.props.fetchItems(id).then((data) => {
                this.setState({ 
                    items: Object.values(data.items),
                });
            });
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
            return ({ 
                filters: newFilters,
                itemsAnimate: true
            });
        },  this.filterItems
        );
    }

    clearFilters(){
        this.setState( ()=> ({
            filters: {},
            itemsAnimate: true
        }), this.filterItems
        );
    }

    clearThisFilter(key){
        this.setState(state => {
            let newFilters = Object.assign({}, state.filters); 
            delete newFilters[key];
            return({
                filters: newFilters,
                itemsAnimate: true
            });
        }, this.filterItems
        );
    }

    handleFilterAttrs(name, id, options){
        return () => this.setState( ({ openFilter, filterAttributes }) => {
            const newFilterAttrs = {
                filterName: name,
                filterId: id,
                filterOptions: options
            };

            if (openFilter && name !== filterAttributes.filterName){
                return ({ filterAttributes: newFilterAttrs, openFilter: true, shouldAnimate: true });
            } else if (!openFilter) {
                return ({ filterAttributes: newFilterAttrs, openFilter: true, shouldAnimate: true });
            } else {
                return ({ openFilter: false });
            }
        });
    }
    
    handleAnimationEnd(){
        this.setState({shouldAnimate: false});
    }

    clearGlobalAnimations(){
        this.setState({ itemsAnimate: false });
    }
    

    render() {
        const filterAttrs = this.state.filterAttributes;
        const { filterName, filterId, filterOptions } = filterAttrs;
        const  handleFilterAttrs = this.handleFilterAttrs;
        const clearThisFilter = this.clearThisFilter;

        const populateItems = () => {
            const items = this.state.items.map(item => {
                return (
                    <Item 
                        clearGlobalAnimations={this.clearGlobalAnimations}
                        itemsAnimate={this.state.itemsAnimate}
                        item={item} 
                        key={`${item.id}`} 
                    />
                );
            });
            
            return (
                <ul>
                    {items}
                </ul>
            )
        }
        
        const items = this.props.items.length ? populateItems() : (<div>ITEMS WERE NOT SET</div>);
        if (this.state.loading) {
            return (<Loading />);
        } else {
        return(
            
            <div>
                <ShoesHeader gender={ this.props.match.params.id }/>
                <div className="items-body">
                    <div className="filter-header">
                        <div>{`${!!(Object.keys(this.state.filters).length) ? "" : "All - "} ${this.state.items.length} Results`}</div>
                        <div className="filter-nav">
                            <div onClick={this.clearFilters} 
                                className={ !!(Object.keys(this.state.filters).length) ? "clear-filters" : "clear-filters-invisible" }
                                >CLEAR FILTERS
                            </div>
                            <ul className="filter-attributes">
                                <FilterButton   
                                    handleFilterAttrs={handleFilterAttrs} 
                                    name={"Size"} 
                                    id={"size"} 
                                    options={[8, 9, 10, 11, 12]}
                                    whichFilter={this.state.filters.size}
                                    openFilter={this.state.openFilter}
                                    currentOpenFilter={filterName}
                                    clearThisFilter={clearThisFilter}/>
                                <FilterButton   
                                    handleFilterAttrs={handleFilterAttrs} 
                                    name={"Color"} 
                                    id={"color"} 
                                    options={["Black", "White", "Grey", "Beige", "Brown", "Red", "Blue", "Green"]}
                                    whichFilter={this.state.filters.color}
                                    openFilter={this.state.openFilter}
                                    currentOpenFilter={filterName}
                                    clearThisFilter={clearThisFilter}/>
                                <FilterButton   
                                    handleFilterAttrs={handleFilterAttrs} 
                                    name={"Style"} 
                                    id={"style"} 
                                    options={["Runner", "Lounger", "Skipper", "Topper"]}
                                    whichFilter={this.state.filters.style}
                                    openFilter={this.state.openFilter}
                                    currentOpenFilter={filterName}
                                    clearThisFilter={clearThisFilter}/>
                                <FilterButton   
                                    handleFilterAttrs={handleFilterAttrs} 
                                    name={"Material"} 
                                    id={"material"} 
                                    options={["Tree", "Wool"]}
                                    whichFilter={this.state.filters.material}
                                    openFilter={this.state.openFilter}
                                    currentOpenFilter={filterName}
                                    clearThisFilter={clearThisFilter}/>
                            </ul>
                        </div>
                    </div>
                    <div onAnimationEnd={this.handleAnimationEnd} className={(this.state.openFilter ? "open-filter-dropdown " : "close-filter-dropdown ") +
                        (this.state.shouldAnimate ? "animation-wipe" : "") +
                         " filter-dropdown"}>
                        <Filter name={filterName} id={filterId} options={filterOptions} addFilter={this.addFilter}/>
                    </div>
                    {items}

                </div>
                <footer></footer>
            </div>
        )}
    }
}

export default Collections;