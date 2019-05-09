import React from 'react';
import { Link } from 'react-router-dom';

class ShoesDropdown extends React.Component {
    constructor(props){
        super(props);
        this.defineGender = (gender) => {
            return  gender == "Men" ? "mens" : "womens";
        };
        this.state = {
          gender: this.defineGender(this.props.gender),          
        };  

    }

    render() {
        return (

            <div className="nav-dropdown-container">
                <ul>
                    <li>
                        <div className="dropdown-shoe-image">
                            <img className="dropdown-shoe-image-item" className="dropdown-shoe-image-item"src="https://s3-us-west-1.amazonaws.com/alldays-seeds/item_3.png" alt=""/>
                        </div>
                        <h3>WOOL RUNNERS</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">
                            <img className="dropdown-shoe-image-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/item_7.png" alt=""/>
                        </div>
                        <h3>WOOL LOUNGER</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">
                            <img className="dropdown-shoe-image-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/item_39.png" alt="" />
                        </div>
                        <h3>TREE RUNNER</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">
                            <img className="dropdown-shoe-image-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/item_9.png" alt="" />
                        </div>
                        <h3>TREE TOPPER</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">
                            <img className="dropdown-shoe-image-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/item_49.png" alt="" />
                        </div>
                        <h3>TREE LOUNGER</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">
                            <img className="dropdown-shoe-image-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/item_13.png" alt="" />
                        </div>
                        <h3>TREE SKIPPER</h3>
                    </li>
                </ul>
                <div id="dropdown-attributes-container">
                    <div>
                        <h2>Shop All {this.props.gender}</h2>
                        <div className="right-arrow">&#10095;</div>
                    </div>
                    <ul>
                        <li>
                            <h3>BY STYLE</h3>
                            <ol>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Runners</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Toppers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Loungers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Skippers</Link>
                            </ol>
                        </li>
                        <li>
                            <h3>BY COLOR</h3>
                            <ol>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Runners</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Toppers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Loungers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.genderQuery}`}>Skippers</Link>
                            </ol>
                        </li>
                    </ul>

                </div>
                <div className="up-arrow-container">
                    <h2 onClick={() => this.props.handleDropDown(this.props.gender)} className="up-arrow">&#8963;</h2>
                </div>
            </div>
        )
    }
}

export default ShoesDropdown;