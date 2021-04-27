import React from 'react';
import "../static/css/MarketplaceCard.css";

const MarketplaceCard = ({ price, title, location, pic }) => {
    return (
        <div className="marketplaceCard">
            <div className="marketplaceCard__pic">
                <img 
                    src={pic}
                />
            </div>
            <div className="marketplaceCard__bottom">
                <p className="bold">{price}</p>
                <p>{title}</p>
                <p className="location">{location}</p>
            </div>
        </div>
    )
}

export default MarketplaceCard
