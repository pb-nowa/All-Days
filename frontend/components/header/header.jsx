import React from 'react';
import { Link, Route } from 'react-router-dom';
import ShoesDropdown from './header_shoes_dropdown';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            isHovered: false,
            dropDown: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.enterHeaderHover = this.enterHeaderHover.bind(this);
        this.leaveHeaderHover = this.leaveHeaderHover.bind(this);
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

    enterHeaderHover(){
        this.setState( state => ({
            isHovered: true,
        }));
    }

    leaveHeaderHover(){
        this.setState( state => ({
            isHovered: false,
        }));
    }

    handleDropDown(){
        this.setState(state => ({
            dropDown: !state.dropDown
        }));
    }
    // return state.dropDown ? { isHovered: true, dropDown: true } : { dropDown: false };

    render() {
            return (
            <>
            <div onMouseEnter={this.enterHeaderHover} 
                onMouseLeave={this.leaveHeaderHover}
                className={this.state.scrollPosition || this.state.isHovered ? "active-header" : "header"} 
                id="header">
                <div id="navs">
                    <div  className="nav" id="left-nav">
                        <div className="nav-link">
                            <h2 onClick={this.handleDropDown}>MEN</h2>
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
            </div>
            <div id="nav-dropdown" className={this.state.dropDown ? "visible" : "invisible"}>
                <ShoesDropdown gender={'Men'} />
            </div>
            </>
        )
    }

}

export default Header;