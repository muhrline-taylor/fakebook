import React from 'react';
import "../static/css/EventCard.css";

const EventCard = ({ pic, time, name, friendsGoing }) => {
    return (
        <div className="eventCard">
            <div className="eventCard__pic">
                <img 
                    src={pic}
                />
            </div>
            <div className="eventCard__body">
                <div className="eventCard__bodyTop">
                    <p>{time}</p>
                </div>
                <div className="eventCard__bodyMid">
                    <p>{name}</p>
                </div>
                <div className="eventCard__bodyBot">
                    <p>{friendsGoing}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard
