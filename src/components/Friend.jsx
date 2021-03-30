import React from 'react';
import "../static/css/Friend.css";

const Friend = ({ friendName, pfp }) => {
    return (
        <div className="friend">
            <div className="friend__pic">
                <img src={pfp} alt="friend_pic" />
            </div>
            <div className="friend__name">
                <p>{friendName}</p>
            </div>
        </div>
    )
}

export default Friend
