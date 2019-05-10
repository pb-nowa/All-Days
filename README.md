# Alldays

Alldays is an online shoe store modelled after Allbirds.com. It is built on a Rails/PostgreSQL backend with a React/Redux frontend. 

The current state of the project was built in 2 weeks, and will have added features soon.

## Features

* Comfortable design flow and navigation

* Responsive and detailed animations for improved UI/UX

* Smooth loading and transitions through tabs and pages

* Interactive dropdown menus

* Compatible at most screen resolutions (Not yet mobile compatible)

* Secure user authentication with BCrypt

**Upcoming Features**

* Add items to a shopping cart

* Navigate to additional information for each product

* Mobile friendly layout

## Collections Page

The collections page is the main user interface of the site. It updates for mens or womens shoes respectively. The user can filter through different attribute combinations using the sleek dropdown menu underneath the header of the page. 

When selecting attributes, the selected options appear in place of the attribute title. The user may unselect specific options or 'clear filters'. On the left, the user can find an updated total count of the current options. As shoes update to fit the given filter, the images render appropriately.

![Image of collections page](https://github.com/pb-nowa/All-Days/blob/master/app/assets/images/screenshots/collections_mens_filtered.png)

The local state of the filters is maintained in the parent component (Collections). Any time a filter is changed, each item's attributes are compared to the Collections filter's current state.

```javascript

// 'collections.jsx'
// Any time a filter is added or removed, the filteredItems function is called. 
// Each filter is nested under this.state.filters. When state is updated,
// setState is given a function that has access to the current state. this.state.filters is then
// shallowly duplicated, and only the specific attribute is changed. 

addFilter(k, v){
    this.setState(state => {
        const newFilters = Object.assign({}, state.filters, { [k]: v });
            return ({ 
                filters: newFilters,
                itemsAnimate: true
            });
        }, this.filterItems
    );
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

```


