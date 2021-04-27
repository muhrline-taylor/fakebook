import React, { useState, useEffect } from 'react';
import "../static/css/CreateRoom.css";
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import { Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import axios from 'axios';

const CreateRoom = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/users")
            .then(res => setUsers(res.data.Users))
    },[])


    return (
        <div className="createRoom">
            <div className="createRoom__button">
                <VideoCallIcon
                    style={{color: "rgba(90, 1, 90, 0.651)"}}
                />
                <p>Create Room</p>
            </div>
            {
                users.length > 0 ?
                <>
                    {
                        users.map((user, k) => (
                            <div className="createRoom__friend">
                                <Avatar src={user.pfp} />
                            </div>
                        ))
                    }
                </>
                :""
            }
            
        </div>
    )
}

export default CreateRoom
