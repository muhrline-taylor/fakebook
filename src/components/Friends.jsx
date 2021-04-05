import React from 'react';
import "../static/css/Friends.css";
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const Friends = () => {
    return (
        <div className="friends">
            <div className="friends__pic">
                <SupervisedUserCircleIcon fontSize="large"/>
            </div>
            <div className="friends__text">
                <h2>Select people's names to preview their profile </h2>
            </div>
            
        </div>
    )
}

export default Friends
