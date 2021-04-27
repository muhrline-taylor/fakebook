import { Avatar } from '@material-ui/core';
import React from 'react';
import "../static/css/Friend.css";

const Friend = ({ friendName, pfp }) => {
    return (
        <div className="friend">
            <div className="friend__pic">
                <Avatar 
                    src={pfp}
                />
            </div>
            <p>{friendName}</p>
        </div>
    )
}

export default Friend
