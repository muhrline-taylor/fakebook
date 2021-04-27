import { Avatar } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../static/css/PostComment.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const PostComment = ({ comment, post, margin }) => {
    const [user, setUser] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8001/api/users/email/${comment.userEmail}`)
            .then(res => {
                setUser(res.data.Users)
            })
    },[])

    return (
        <div className="postComment">
            {
                user ?
                    <>
                        {
                            user.pfp ?
                            <div className="postComment__pic">
                                <Avatar 
                                    src={user.pfp}
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                    }}
                                />
                            </div>
                            :""
                        }
                        {
                            user.fname && user.lname ?
                            <>
                            <div className="postComment__main" style={{
                                marginLeft: margin
                            }}>
                                <div className="postComment__mainContainer">
                                    <div className="postComment__mainBubble">
                                        <h5>{user.fname} {user.lname}</h5>
                                        <p>{comment.comment}</p>
                                    </div>
                                    <MoreHorizIcon />
                                </div>
                                
                                <div className="postComment__mainOptions">
                                    <p className="postComment__mainOptions--p">Like</p>&nbsp;<p className="postComment__mainOptions--tick">-</p>&nbsp;
                                    <p className="postComment__mainOptions--p">Reply</p>&nbsp;
                                    
                                    <p>- timestamp</p>
                                </div>
                            </div>
                            
                            
                            </>
                            :""
                        }
                    </>
                :""
            }
            
        </div>
    )
}

export default PostComment
