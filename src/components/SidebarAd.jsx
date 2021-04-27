import React from 'react';
import "../static/css/SidebarAd.css";

const SidebarAd = ({ pic, name, link }) => {
    return (
        <div className="sidebarAd">
            <div className="sidebarAd__pic">
                <img src={pic} alt="sidebarAd__pic" />
            </div>
            
            <div className="sidebarAd__content">
                <p style={{
                    fontWeight: "500"
                }}>{name}</p>
                <p style={{
                    color: "gray"
                }}>{link}</p>
            </div>
        </div>
    )
}

export default SidebarAd
