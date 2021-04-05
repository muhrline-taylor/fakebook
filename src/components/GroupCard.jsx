import React from 'react';
import "../static/css/GroupCard.css";

const GroupCard = ({ pic, name, lastActive }) => {
    return (
        <div className="groupCard">
            <div className="groupCard__img">
                <img 
                    src={pic}
                    alt="default_pic"
                />
            </div>
            <div className="groupCard__body">
                <div className="groupCard__bodyName">
                    <p>{name}</p>
                </div>
                <div className="groupCard__bodyLast">
                    <p>Last active {lastActive} ago</p>
                </div>
            </div>
        </div>
    )
}

export default GroupCard
