import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render(){
        return(
            <div> 
                <div className="home-img-header">
                    <h1 id="home-page-header">COMFORT THAT COMES NATURALLY</h1>
                    <img className="home-img-header-item" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/HH_Desktop_Tree.webp" alt=""/>

                    <div id="home-links">
                        <div className="link-item-container">
                            <div className="home-link" id="mens-button">
                                <Link className="link-box" to={'/collections/mens'}>SHOP MEN</Link>
                            </div>
                        </div>
                        <div className="link-item-container">
                            <div className="home-link" id="womens-button"> 
                                <Link className="link-box" to={'/collections/womens'}>SHOP WOMEN</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about-panel">
                    <div id="about-panel-container">
                        <img id="about-panel-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/tree_wool_sugar_ca906039-95f4-40a9-9cbc-487b9674520e.jpg" alt=""/>
                        <div id="about-text-container">
                            <h2>Better Things In a Better Way</h2>
                            <p>It starts with better materials, continues with better design, and carries through to better factories and shipping methods. Because we think our planet deserves better. Less waste and pollution. More thoughtfulness and accountability. That sounds better, doesn’t it?</p>
                            <input type="submit" id="learn-more" value="LEARN MORE ABOUT OUR MATERIALS"/>
                        </div>
                    </div>
                </div>
                <div className="home-panel">
                    <div id="images-panel-container">
                        <img className="large-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/2019-05-02+14.33.51.jpeg" alt=""/>
                        <div className="large-image">
                            <div className="small-image-container">
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/Homepage_Pulp.gif" alt=""/>
                                <div className="small-image">missingimage</div>
                            </div>
                            <div className="small-image-container">
                                <div className="small-image">missingimage</div>
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/2019-05-02+15.37.31.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-panel">
                    <div id="news-container">
                        <h1>ALLDAYS IN THE NEWS</h1>
                        <div id="quotes-container">
                            <div className="arrow-button">{"<"}</div>
                            <h2>"This quote is a link that says very good things about this brand"</h2>
                            <div className="arrow-button">{">"}</div>
                        </div>
                        <ul>
                            <li>news</li>
                            <li>news</li>
                            <li>news</li>
                            <li>news</li>
                            <li>news</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;