import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

render() {
        return (
            <div className="header">
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
            </div>
        )
    }

}

export default Header;