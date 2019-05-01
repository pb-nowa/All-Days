import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AccountFormContainer from './account_form/account_form_container';
import Home from '../components/home/home';

const App = () => (

    <div>
        <Switch> 
            <Route exact path="/account" component={AccountFormContainer}/>
            <Route path="/" component={Home}/>
        </Switch>
    </div>
);

export default App;