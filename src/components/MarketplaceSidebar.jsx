import React from 'react';
import "../static/css/MarketplaceSidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";

const MarketplaceSidebar = () => {
    return (
        <div className="marketplaceSidebar">
            <div className="marketplaceSidebar__header">
                <div className="marketplaceSidebar__headerTop">
                    <h2>Marketplace</h2>
                    <div className="marketplaceSidebar__headerTop--settings">
                        <SettingsIcon style={{ fontSize: 30 }}/>
                    </div>
                    
                </div>
                <div className="marketplaceSidebar__headerSearch">
                    <SearchIcon />
                    <input 
                        type="text"
                        placeholder="Search Marketplace"
                    />
                </div>
            </div>
            <div className="marketplaceSidebar__body">
                {/* TABS */}

                {/* FILTERS */}

                {/* CATEGORIES */}
            </div>

        </div>
    )
}

export default MarketplaceSidebar
