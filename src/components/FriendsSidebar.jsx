import React from 'react';
import "../static/css/FriendsSidebar.css";
import SettingsIcon from '@material-ui/icons/Settings';
import FriendCard from './FriendCard';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const FriendsSidebar = () => {
    return (
        <div className="friendsSidebar">
            <div className="friendsSidebar__header">
                <h2>Friends</h2>
                <div className="friendsSidebar__header--settings">
                    <SettingsIcon />
                </div>
            </div>
            <div className="friendsSidebar__requests">
                <div className="friendsSidebar__requests--header">
                    <h3>Friend Requests</h3>
                    <p>See All</p>
                </div>
                <FriendCard 
                    pfp
                    friendName="Johnny Doe"
                    mutuals="9"
                    time="1d"
                    buttonText="Confirm"
                />
                <FriendCard 
                    pfp
                    friendName="Jane Doe"
                    mutuals="45"
                    time="3w"
                    buttonText="Confirm"
                />
                <FriendCard 
                    pfp
                    friendName="Timmy Turner"
                    mutuals="2"
                    time="1y"
                    buttonText="Confirm"
                />
                <div className="friendsSidebar__requests--footer">
                    <Button
                        variant="contained"
                        disableElevation 
                        style={{minWidth: "95%", marginLeft: "4%", marginRight: "1%"}}
                    >
                        See More
                        <ExpandMoreIcon />
                    </Button>
                </div>
            </div>
            <div className="friendsSidebar__suggestions">
                <div className="friendsSidebar__suggestionsHeader">
                    <h3>People You May Know</h3>
                </div>
                <div className="friendsSidebar__suggestionsContent">
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                    <FriendCard 
                        pfp
                        friendName="Timmy Turner"
                        mutuals="2"
                        time="1y"
                        buttonText="Add Friend"
                    />
                </div>
            </div>
        </div>
    )
}

export default FriendsSidebar
