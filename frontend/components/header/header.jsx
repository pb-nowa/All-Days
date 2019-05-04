import React from 'react';
import { Link, Route } from 'react-router-dom';
import ShoesDropdown from './header_shoes_dropdown';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState((state) => {
            return({
                scrollPosition: window.pageYOffset,
            });
        });
    }

    render() {
            return (
            <div className={this.state.scrollPosition ? "active-header" : "header"} id="header">
                <div id="navs">
                    <div  className="nav" id="left-nav">
                        <div className="nav-link">
                            <h2>MEN</h2>
                        </div>
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
                <div id="nav-dropdown">
                    <ShoesDropdown gender={'Men'} />
                </div>
            </div>
        )
    }

}

export default Header;