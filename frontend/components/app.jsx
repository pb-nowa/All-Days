import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import AccountContainer from './account/account_container';
import Home from '../components/home/home';
import Header from '../components/header/header';
import NoMatchingRoute from './NoMatchingRoute';

const App = () => (

    <div>
        <Header />
        <Switch> 
            <Route exact path="/account" component={AccountContainer}/>
            <Route exact path="/" component={Home}/>
            <Route component={NoMatchingRoute}/>
        </Switch>
        <footer></footer>
    </div>
);


export default App;