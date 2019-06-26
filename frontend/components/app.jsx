import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import CollectionsContainer from './items/collections_container';
import AccountContainer from './account/account_container';
import Home from '../components/home/home';
import Header from '../components/header/header';
import NoMatchingRoute from './NoMatchingRoute';
import ShoeContainer from './shoes/shoe_container';
import Cart from './cart/cart';

const App = () => (

    <div>
        <Header />
        <Switch> 
            <Route exact path="/collections/:id" component={CollectionsContainer}/>
            <Route exact path="/account" component={AccountContainer}/>
            <Route exact path="/shoe/:id" component={ShoeContainer}/>
            <Route exact path="/" component={Home}/>
            <Route component={NoMatchingRoute}/>
        </Switch>
        <Cart />
    </div>
);


export default App;