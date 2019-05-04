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
                <div>
                    <h2>Shop All {this.state.gender}</h2>
                    <div>
                        <ul>
                            <li>
                                <h3>BY STYLE</h3>
                                <ul>
                                    <Link to={`/collections/${this.state.gender}`}>Runners</Link>
                                    <Link to={`/collections/${this.state.gender}`}>Toppers</Link>
                                    <Link to={`/collections/${this.state.gender}`}>Loungers</Link>
                                    <Link to={`/collections/${this.state.gender}`}>Skippers</Link>
                                </ul>
                            </li>
                            <li>BY COLOR</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoesDropdown;