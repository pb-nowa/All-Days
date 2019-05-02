import React from 'react';

const NoMatchingRoute = (props) => {
    return (
        <div className="page-not-found">
            <marquee behavior="fast" direction=""><h1 id="broken-header">404 Page Not Found</h1></marquee>
        </div>
    );
};

export default NoMatchingRoute;