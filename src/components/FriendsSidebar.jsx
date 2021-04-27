import React, { useState, useEffect } from 'react';
import "../static/css/FriendsSidebar.css";
import SettingsIcon from '@material-ui/icons/Settings';
import FriendCard from './FriendCard';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';


const FriendsSidebar = () => {
    const [friendsList, setFriendsList] = useState([
        
    ]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/users")
            .then(res => setFriendsList(res.data.Users))
    },[]);

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
                    height="100%"
                />
                <FriendCard 
                    pfp
                    friendName="Jane Doe"
                    mutuals="45"
                    time="3w"
                    buttonText="Confirm"
                    height="100%"
                />
                <FriendCard 
                    pfp
                    friendName="Timmy Turner"
                    mutuals="2"
                    time="1y"
                    buttonText="Confirm"
                    height="100%"
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
                    {
                        friendsList ?
                        friendsList.map((user, k) => (
                            <FriendCard 
                                pfp={user.pfp}
                                friendName={`${user.fname} ${user.lname}`}
                                mutuals="2"
                                time="1y"
                                buttonText="Add Friend"
                                height="6.7vh"
                            />
                        ))
                        :""
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default FriendsSidebar
