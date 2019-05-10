import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        window.setTimeout(() => {
        this.setState({ loading: false });
        }, 1500);
    }
    render(){
        if (this.state.loading){
            return (<Loading/>);
        } else {
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
                            <Link className="link-box" to={'/collections/mens'}><input type="submit" id="learn-more" value="LEARN MORE ABOUT OUR MATERIALS"/></Link>
                        </div>
                    </div>
                </div>
                <div className="home-panel">
                    <div id="images-panel-container">
                        <div className="large-image-label-container">
                            <h2>Wool</h2>
                        <p>Comfort &amp; Flexibility</p>
                        </div>
                        <div className="left-image-container">
                        <img className="large-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/2019-05-02+14.33.51.jpeg" alt=""/>
                            <div className="small-image-container">
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/IMG_5125.JPG" alt="" />
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/2019-05-02+14.33.09.jpg" alt="" />
                            </div>
                                {/* <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/2019-05-02+15.37.31.jpg" alt=""/>  */}
                        </div>
                        <div className="left-image-container">
                           
                            {/* <div className="small-image-container">
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/IMG_5128.JPG" alt="" />
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/IMG_5092.JPG" alt="" />
                            </div> */}
                            <div className="small-image-container">
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/Homepage_Pulp.gif" alt="" />
                                <img className="small-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/2019-05-02+15.37.31.jpg" alt=""/>
                            </div>
                        
                        <img className="large-image" src="https://s3-us-west-1.amazonaws.com/alldays-seeds/IMG_5069.png" alt="" />
                        </div>
                        <div className="large-image-label-container right-side">
                            <h2>Tree</h2>
                            <p>Durability &amp; Support</p>
                        </div>
                    </div>
                </div>
                <div className="home-panel">
                    <div id="news-container">
                        <h1>ALLDAYS IN THE NEWS</h1>
                        <div id="quotes-container">
                            <div className="arrow-button">{"<"}</div>
                            <a href="http://time.com/4243338/allbirds-wool-runners/"><h2>"This quote is a link that says very good things about this brand"</h2></a>
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
                <footer></footer>
            </div>
        );}
    }
}


export default Home;