import React from 'react';

class Loading extends React.Component {
    render(){
        const isLoading = this.props.isLoading;
        if (isLoading) {
            return(
                <div className="loading-page">
                    <img src="https://s3-us-west-1.amazonaws.com/alldays-seeds/772.gif" alt=""/>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}

export default Loading;