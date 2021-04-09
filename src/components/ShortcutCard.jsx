import React from 'react';
import "../static/css/ShortcutCard.css";

const ShortcutCard = ({ pic, name }) => {
    return (
        <div className="shortcutCard">
            <div className="shortcutCard__pic">
                <img 
                    src={pic}
                    alt="placeholder"
                />
            </div>
            <div className="shortcutCard__name">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ShortcutCard
