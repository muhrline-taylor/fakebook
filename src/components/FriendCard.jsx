import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import "../static/css/FriendCard.css";

const FriendCard = ({ pfp, friendName, mutuals, time, buttonText, height }) => {
    return (
        <div className="friendCard">
            <div className="friendCard__pic">
                <Avatar 
                    style={{height: height, width: "100%"}}
                    src={pfp}
                    alt="https://lh3.googleusercontent.com/proxy/2us1g-a4BVIKK_BM3ir8NV8wg-nQQcWLAPhgI4IhPW_19PVZUnnuF2HZHp3hvNU8pyARqzprQJuGuHB8ksYdkdQ5XMBtzP0r70lvBWNu0Y_V4dAKh-Tf3w"
                />
            </div>
            <div className="friendCard__body">
                <div className="friendCard__bodyName">
                    <h4>{friendName}</h4>
                    <p>{time}</p>
                </div>
                <div className="friendCard__bodyMutuals">
                    <p>{mutuals} mutual friends</p>
                </div>
                <div className="friendCard__bodyButtons">
                    <Button disableElevation variant="contained" color="primary">{buttonText}</Button>
                    <Button disableElevation variant="contained">Delete</Button>
                </div>
            </div>
            
            
        </div>
    )
}

export default FriendCard
