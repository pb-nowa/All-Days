import React from 'react';
import { Link } from 'react-router-dom';

class ShoesDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gender: this.props.gender,
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
                        <h2>Shop All {this.state.gender}</h2>
                        <div className="arrow">{">"}</div>
                    </div>
                    <ul>
                        <li>
                            <h3>BY STYLE</h3>
                            <ol>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Runners</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Toppers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Loungers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Skippers</Link>
                            </ol>
                        </li>
                        <li>
                            <h3>BY COLOR</h3>
                            <ol>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Runners</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Toppers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Loungers</Link>
                                <Link className="attribute-link" to={`/collections/${this.state.gender}`}>Skippers</Link>
                            </ol>
                        </li>
                    </ul>

                </div>
                <div className="arrow"><h4>^</h4></div>
            </div>
        )
    }
}

export default ShoesDropdown;