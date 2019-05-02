import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AccountContainer from './account/account_container';
import Home from '../components/home/home';
import Header from '../components/header/header';

const App = () => (

    <div>
        <Header />
        <Switch> 
            <Route exact path="/account" component={AccountContainer}/>
            <Route path="/" component={Home}/>
        </Switch>
        <footer></footer>
    </div>
);


export default App;