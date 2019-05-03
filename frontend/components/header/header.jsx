import React from 'react';
import { Link, Route } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

render() {
        return (
            <div className="header">
                <div className="nav" id="left-nav">
                    <div className="nav-link"><Link to={'/collections/mens'}><h2>MEN</h2></Link></div>
                    <div className="nav-link"><Link to={'/collections/womens'}><h2>WOMEN</h2></Link></div>
                    <div className="nav-link"><h2>ABOUT</h2></div>
                </div>
                <div id="logo">
                    <Link to="/"><h1>Alldays</h1></Link>
                </div>
                <div className="nav" id="right-nav">
                    <div className="nav-link"><Link to={'/account'}><h2 id="account-link">ACCOUNT</h2></Link></div>
                    <div className="nav-link"><h2>CART</h2></div>
                </div>
            </div>
        )
    }

}

export default Header;