import { Avatar } from '@material-ui/core'
import React from 'react';
import "../static/css/AvatarTab.css";

const AvatarTab = ({ pic, name, clickHandler, active }) => {
    return (
        <div 
            className={`tab ${active === true && "avatarTab--active"}`}
            onClick={clickHandler}
        >
            <div
                className={`avatarTab__icon ${active === true && "avatarTab__icon--active"}`}
                onClick={clickHandler}
            >
                <Avatar 
                    src={pic}
                    style={{
                        height: "35px",
                        width: "35px",
                    }}
                />
            </div>
            
            <p>{name}</p>
        </div>
    )
}

export default AvatarTab
