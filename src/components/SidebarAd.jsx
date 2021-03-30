import React from 'react';
import "../static/css/SidebarAd.css";

const SidebarAd = ({ pic, name, link }) => {
    return (
        <div className="sidebarAd">
            <div className="sidebarAd__pic">
                <img src={pic} alt="sidebarAd__pic" />
            </div>
            <div className="sidebarAd__content">
                <h3>{name} -</h3> 
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}

export default SidebarAd
