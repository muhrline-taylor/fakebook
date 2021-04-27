import React, { useState } from 'react';
import "../static/css/Button2.css";

const Button2 = ({ color, color2, textColor, text }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="button2"
            style={{
                backgroundColor: `${active ?
                color2
                :color}`,
            }}
            onMouseOver={() => {
                setActive(true)
                
            }}
            onMouseOut={() => {
                setActive(false)
            }}
        >
            <p style={{
                color: textColor
            }}>{text}</p>
        </div>
    )
}

export default Button2
