import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AccountContainer from './account/account_container';
import Home from '../components/home/home';

const App = () => (

    <div>
        <header className="header">
            <div className="nav" id="left-nav">
                <div className="nav-link"><h2>Men</h2></div>
                <div className="nav-link"><h2>Women</h2></div>
                <div className="nav-link"><h2>About</h2></div>
            </div>
            <div id="logo">
                <Link to="/"><h1>Alldays</h1></Link>
            </div>
            <div className="nav" id="right-nav">
                <div className="nav-link"><Link to={'/account'}><h2 id="account-link">Account</h2></Link></div>
                <div className="nav-link"><h2>Cart</h2></div>
            </div>      
        </header>
        <Switch> 
            <Route exact path="/account" component={AccountContainer}/>
            <Route path="/" component={Home}/>
        </Switch>
        <footer></footer>
    </div>
);


export default App;