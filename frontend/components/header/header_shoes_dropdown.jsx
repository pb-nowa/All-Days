import React from 'react';
import { Link } from 'react-router-dom';

class ShoesDropdown extends React.Component {
    constructor(props){
        super(props);
        this.defineGender = (gender) => {
            console.log(gender);
            return  gender == "Men" ? "mens" : "womens";
        };
        this.state = {
          gender: this.defineGender(this.props.gender)
        };  

    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <div className="dropdown-shoe-image">missing image</div>
                        <h3>this.state.shoe</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">missing image</div>
                        <h3>this.state.shoe</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">missing image</div>
                        <h3>this.state.shoe</h3>
                    </li>
                    <li>
                        <div className="dropdown-shoe-image">missing image</div>
                        <h3>this.state.shoe</h3>
                    </li>
                </ul>
                <div id="dropdown-attributes-container">
                    <div>
                        <h2>Shop All {this.props.gender}</h2>
                        <div className="arrow">{">"}</div>
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
                <div className="arrow"><h2>^</h2></div>
            </div>
        )
    }
}

export default ShoesDropdown;