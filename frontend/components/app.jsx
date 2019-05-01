import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AccountContainer from './account/account_container';
import Home from '../components/home/home';

const App = () => (

    <div>
        <header>
            <Link to="/" className="header-link"><h1>Alldays</h1></Link>
            <nav>
                <Link to={'/account'}><h3>Account</h3></Link>
            </nav>      
        </header>
        <Switch> 
            <Route exact path="/account" component={AccountContainer}/>
            <Route path="/" component={Home}/>
        </Switch>
    </div>
);


export default App;