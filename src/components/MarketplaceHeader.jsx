import React from 'react';
import "../static/css/MarketplaceHeader.css";

const MarketplaceHeader = () => {
    return (
        <div className="marketplaceHeader">
            <h3>COVID-19: Buyers and Sellers</h3>
            <p>Please follow local guidelines about physical distancing and staying home</p>
            <div className="marketplaceHeader--button">
                <p>Learn More</p>
            </div>
        </div>
    )
}

export default MarketplaceHeader
