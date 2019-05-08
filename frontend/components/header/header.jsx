import React from 'react';
import { Link, Route } from 'react-router-dom';
import ShoesDropdown from './header_shoes_dropdown';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            isHovered: false,
            dropDown: false,
            dropDownGender: "Men",
            dropDownIsActive: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.enterHeaderHover = this.enterHeaderHover.bind(this);
        this.leaveHeaderHover = this.leaveHeaderHover.bind(this);
        this.dropDownIsActive = this.dropDownIsActive.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    

    handleScroll() {
        this.setState( (state) => ({ scrollPosition: window.pageYOffset }) );
        this.setState( state => ({ dropDownIsActive: !!(state.scrollPosition || state.isHovered || state.dropDown || this.props.location.pathname === "/account") }) );
    }

    enterHeaderHover(){
        this.setState( () => ({ isHovered: true }) );
        this.setState(state => ({ dropDownIsActive: !!(state.scrollPosition || state.isHovered || state.dropDown || this.props.location.pathname === "/account") }) );
    }

    leaveHeaderHover(){
        this.setState( () => ({ isHovered: false }) );
    this.setState(state => ({ dropDownIsActive: !!(state.scrollPosition || state.isHovered || state.dropDown || this.props.location.pathname === "/account") }) );
    }

    handleDropDown(dropDownGender){
        this.setState(state => ({
            dropDown: !state.dropDown,
            dropDownGender: dropDownGender
            
        }));
    }

    dropDownIsActive() {
        this.setState({
            
        });
    }

    render() {
        const dropDownIsActive = this.state.dropDownIsActive;
        return (
        <>
        <div onMouseEnter={this.enterHeaderHover} 
            onMouseLeave={this.leaveHeaderHover}
            className={ dropDownIsActive ? "active-header" : "header"} 
            id="header">
            <div id="navs">
                <div  className="nav" id="left-nav">
                    <div className={(dropDownIsActive ? "a-header-button" : "u-header-button") + " nav-link"}>
                        <h2 onClick={() => this.handleDropDown("Men")}>MEN</h2>
                    </div>
                    <div className={(dropDownIsActive ? "a-header-button" : "u-header-button") + " nav-link" }>
                        <h2 onClick={() => this.handleDropDown("Women")}>WOMEN</h2>
                    </div>
                    <div className={(dropDownIsActive || this.state.isHovered || this.state.dropDown ? "a-header-button" : "u-header-button") + " nav-link" }><h2>ABOUT</h2></div>
                </div>
                <div id="logo">
                    <Link to="/" className={(dropDownIsActive ? "a-header-button" : "u-header-button") + " nav-link logo"}><h1>Alldays</h1></Link>
                </div>
                <div className="nav" id="right-nav">
                    <div ><Link to={'/account'}><h2 className={(dropDownIsActive ? "a-header-button" : "u-header-button") + " nav-link"} id="account-link">ACCOUNT</h2></Link></div>
                    <div className={(dropDownIsActive ? "a-header-button" : "u-header-button") + " nav-link"}><h2>CART</h2></div>
                </div>
            </div>
        </div>
        <div id="nav-dropdown" className={this.state.dropDown ? "visible" : "invisible"}>
            <ShoesDropdown gender={this.state.dropDownGender} genderQuery={`${this.state.dropDownGender.toLowerCase()}s`}/>
        </div>
        </>
        )
    }

}

export default withRouter(Header);