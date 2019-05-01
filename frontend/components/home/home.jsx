import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render(){
        return(
            <div> 
                <h1>Alldays HOMEPAGE</h1>
                <Link to={'/account'}>
                    <h3>Account</h3>
                </Link>
            </div>
        );
    }
}


export default Home;