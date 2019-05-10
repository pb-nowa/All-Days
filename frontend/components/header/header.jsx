import React from 'react';
import { Link, Route } from 'react-router-dom';
import ShoesDropdown from './header_shoes_dropdown';
import { withRouter } from 'react-router-dom';
import DropDownButton from './dropdown_button';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            isHovered: false,
            dropDown: false,
            dropDownGender: "Men",
            headerIsActive: false,
            isAnimating: false,
            bounce: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.enterHeaderHover = this.enterHeaderHover.bind(this);
        this.leaveHeaderHover = this.leaveHeaderHover.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        this.setState({ headerIsActive: !!(this.state.scrollPosition || this.state.isHovered || this.state.dropDown || this.props.location.pathname === "/account") });
    }
    handleScroll() {
        this.setState( () => ({ scrollPosition: window.pageYOffset }) );
        this.setState( state => ({ headerIsActive: !!(state.scrollPosition || state.isHovered || state.dropDown || this.props.location.pathname === "/account") }) );
    }

    enterHeaderHover(){
        this.setState( () => ({ isHovered: true }) );
        this.setState(state => ({ headerIsActive: !!(state.scrollPosition || state.isHovered || state.dropDown || this.props.location.pathname === "/account") }) );
    }

    leaveHeaderHover(){
        this.setState( () => ({ isHovered: false }) );
    this.setState(state => ({ headerIsActive: !!(state.scrollPosition || state.isHovered || state.dropDown || this.props.location.pathname === "/account") }) );
    }

    handleDropDown(dropDownGender){
        
        this.setState(state => {
            if (state.dropDown && dropDownGender !== state.dropDownGender){
               return ({
                    dropDown: true,
                    dropDownGender: dropDownGender,
                    isAnimating: true,
                    bounce: true,
               });
            } else if (!state.dropDown) {
                return ({
                    dropDown: true,
                    dropDownGender: dropDownGender,
                    isAnimating: true,
                    bounce: false,
                });
            } else {
                return ({
                    dropDown: false,
                    dropDownGender: dropDownGender,
                    bounce: false,
                });              
            }
        });
    }

    handleAnimation(){
        this.setState({ isAnimating: false });
    }

    render() {
        const headerIsActive = this.state.headerIsActive;
        const dropDown = this.state.dropDown;
        return (
        <>
        <div onMouseEnter={this.enterHeaderHover} 
            onMouseLeave={this.leaveHeaderHover}
            className={ (dropDown && headerIsActive) ? "active-header with-dropdown" : (headerIsActive) ? "active-header" : "header"} 
            id="header">
            <div id="navs">
                <div  className="nav" id="left-nav">
                    <DropDownButton 
                        headerIsActive={headerIsActive} 
                        handleDropDown={this.handleDropDown} 
                        dropDown={this.state.dropDown} 
                        dropDownGender={this.state.dropDownGender}
                        title="MEN" 
                        id="Men"/>
                    <DropDownButton 
                        headerIsActive={headerIsActive} 
                        handleDropDown={this.handleDropDown} 
                        dropDown={this.state.dropDown} 
                        dropDownGender={this.state.dropDownGender}
                        title="WOMEN" 
                        id="Women"/>
                    {/* <div className={(headerIsActive ? "a-header-button" : "u-header-button") + " nav-link" }><h2>ABOUT</h2></div> */}
                </div>
                <div id="logo">
                    <Link to="/" className={(headerIsActive ? "a-header-button" : "u-header-button") + " nav-link logo"}><h1>Alldays</h1></Link>
                </div>
                <div className="nav" id="right-nav">
                    <div ><Link to={'/account'}><h2 className={(headerIsActive ? "a-header-button" : "u-header-button") + " nav-link"} id="account-link">ACCOUNT</h2></Link></div>
                    {/* <div className={(headerIsActive ? "a-header-button" : "u-header-button") + " nav-link"}><h2>CART</h2></div> */}
                </div>
            </div>
        </div>
        <div
            onAnimationEnd={this.handleAnimation} 
            id="nav-dropdown" 
                    className={!this.state.dropDown ? "invisible" : !this.state.isAnimating ? "visible" : this.state.bounce ? "visible swipe-up-down" : "visible swipe-down" }>
            <ShoesDropdown gender={this.state.dropDownGender} genderQuery={ this.state.dropDownGender === "Men" ? "mens" : "womens"} handleDropDown={this.handleDropDown}/>
        </div>
        <div className={dropDown ?  "overlay-visible" : "overly-invisible" }></div>
        </>
        )
    }

}

export default withRouter(Header);