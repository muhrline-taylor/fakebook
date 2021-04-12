import React from 'react';
import "../static/css/Marketplace.css";
import MarketplaceHeader from './MarketplaceHeader';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MarketplaceCard from './MarketplaceCard';

const Marketplace = () => {
    return (
        <div className="marketplace">
            <div className="marketplace__header">
                <MarketplaceHeader />
            </div>
            <div className="marketplace__main">
                <div className="marketplace__mainHeader">
                    <h3>Today's Picks for You</h3>
                    <div className="marketplace__mainHeaderR">
                        <LocationOnIcon style={{
                            color: "#1877F2"
                        }}/>
                        <p>St Louis - 40 mi</p>
                    </div>
                </div>
                <div className="marketplace__mainBody">
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                    <MarketplaceCard />
                </div>
            </div>
        </div>
    )
}

export default Marketplace
