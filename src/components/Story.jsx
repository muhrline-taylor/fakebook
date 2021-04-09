import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "../static/css/Story.css";

const Story = ({ img, pfp, fname, lname }) => {

    const [mouseOver, setMouseOver] = useState(false)

    return (
        <div 
            className="story" 
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            style={{
                maxHeight: "99%",
                width: "18%",
                borderRadius: "12px",
                paddingTop: "2%",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.363)",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `${mouseOver === true ? "scale(1.02)" : "scale(1)"}`,
                overflow: "hidden",
                transition: "0.2s",
                display: "flex",
                flexDirection: "column",
            }}>
            <div className="story__top">
                <Avatar 
                    src={pfp}
                />
            </div>
            <div className="story__bottom">
                <p>{fname} {lname}</p>
            </div>
        </div>
    )
}

export default Story
