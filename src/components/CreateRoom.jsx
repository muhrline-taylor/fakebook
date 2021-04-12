import React from 'react';
import "../static/css/CreateRoom.css";
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import { Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const CreateRoom = () => {
    return (
        <div className="createRoom">
            <div className="createRoom__button">
                <VideoCallIcon
                    style={{color: "rgba(90, 1, 90, 0.651)"}}
                />
                <p>Create Room</p>
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            <div className="createRoom__friend">
                <Avatar 
                    src="https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"
                />
            </div>
            
        </div>
    )
}

export default CreateRoom
