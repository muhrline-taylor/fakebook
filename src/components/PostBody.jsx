import React, { useEffect, useState } from 'react';
import "../static/css/PostBody.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MakePostButton from './MakePostButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUserList } from '../features/userSlice';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PostText from './PostText';
import PostPic from './PostPic';
import axios from 'axios';
import PostComment from './PostComment';
import { NavigateNextTwoTone } from '@material-ui/icons';
import { navigate } from '@reach/router'


const PostBody = ({ post }) => {
    const user = useSelector(selectUserList);
    const [input, setInput] = useState("");
    const [showComments, setShowComments] = useState(false);
    const [likedColor, setLikedColor] = useState("rgb(0, 0, 0, 0.6)");
    const [firstLike, setFirstLike] = useState({});
    


    const submitHandler = e => {
        e.preventDefault();
        const form = {
            "comments": [{
                "userEmail": user.Users.email,
                "comment": e.target[0].value
            }, ...post.comments]
        };
        axios.put(`http://localhost:8001/api/posts/update/${post._id}`, form)
        window.location.reload()
    }

    useEffect(() => {
        if(!localStorage.getItem("loggedInUser")){
            navigate("/")
        } else {
            if(post.likes.length > 0){
                axios.get(`http://localhost:8001/api/users/email/${post.likes[0]}`)
                    .then(res => setFirstLike(res.data.Users))
            }
        }
    },[])

    useEffect(() => {
        post.likes.map((like, k) => {
            if(like === localStorage.getItem("loggedInUser")){
                setLikedColor("#1977F2")
            }
        })
    })

    const likeHandler = () => {
        var temp = 0
        post.likes.map((like, k) => {
            if(like === localStorage.getItem("loggedInUser")){
                temp = 1
            }
        })
        if(temp === 0){
            const form = {
                "likes": [
                    localStorage.getItem("loggedInUser"),
                    ...post.likes
                ]
            }
            axios.put(`http://localhost:8001/api/posts/update/${post._id}`, form)
        } else {
            var form = {
                "likes": []
            }
            post.likes.map((like, k) => {
                if(like !== localStorage.getItem("loggedInUser")){
                    form.likes.push(like)
                }
            })
            axios.put(`http://localhost:8001/api/posts/update/${post._id}`, form)
        }
        window.location.reload()
    }


    return (
        <div className="postBody">
            <div className="postBody__top">
                <div className="postBody__topText">
                    {
                        post.text ?
                        <PostText 
                            text={post.text}
                        />
                        :""
                    }
                    
                </div>
                <div className="postBody__topPic">
                    {/* PIC? */}
                    {
                        post.pic ?
                        <PostPic 
                            pic={post.pic}
                        />
                        :""
                    }
                        

                    {/* /PIC? */}
                </div>
                <div className="postBody__topReacts">
                    <div className="postBody__topReacts--icon">
                        <ThumbUpAltIcon 
                            style={{
                                color: "white",
                                height: "15px",
                                width: "15px",
                                borderRadius: "20px"
                            }}
                        />
                    </div>
                    <p>{
                        firstLike.fname && firstLike.lname ?
                        <>{firstLike.fname} {firstLike.lname} {
                            post.likes.length > 1 ?
                            <>and {post.likes.length-1} other{
                                post.likes.length > 2 ?
                                <>s</>
                                :""
                            }</>
                            :""
                        }</>
                        :<>0</>
                        }</p>
                </div>
            </div>
            <div className="postBody__mid">
                <MakePostButton 
                    component={<ThumbUpAltIcon 
                        style={{
                            color: likedColor,
                            height: "28px",
                            width: "28px",
                        }}
                    />}
                    text="Like"
                    clickHandler={likeHandler}
                    size="83%"
                    textColor={likedColor}
                />
                <MakePostButton 
                    component={<ChatBubbleOutlineIcon 
                        style={{
                            color: "rgb(0, 0, 0, 0.75)",
                            height: "26px",
                            width: "26px",
                        }}
                    />}
                    text="Comment"
                    clickHandler={() => {}}
                    size="83%"
                    textColor="#606266"
                />
                <MakePostButton 
                    component={<ShareIcon 
                        style={{
                            color: "rgb(0, 0, 0, 0.75)",
                            height: "26px",
                            width: "26px",
                        }}
                    />}
                    text="Share"
                    clickHandler={() => {}}
                    size="83%"
                    textColor="#606266"
                />
            </div>
            {
                showComments || post.comments.length < 1 ?
                ""
                :
                    <div className={`postBody__comments ${showComments && 'postBody__commentsActive'}`}>
                        <p
                            onClick={() => setShowComments(true)}
                        >View more comments</p>
                    </div>
            }
            <div className="postBody__bottom">
                {
                    user.Users ?
                    <Avatar 
                        src={user.Users.pfp}
                        style={{
                            height: "32px",
                            width: "32px"
                        }}
                    />
                    :
                    <Avatar 
                        style={{
                            height: "32px",
                            width: "32px"
                        }}
                    />
                }
                
                <div className="postBody__bottom--input">
                    <form onSubmit={submitHandler}>
                        <input 
                            type="text"
                            placeholder="Write a comment..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button type="submit" style={{display: "none"}} />
                    </form>
                    
                    <div className="postBody__bottom--input__button">
                        <InsertEmoticonIcon
                            style={{
                                height: "20px",
                                width: "20px",
                                color: "gray",
                            }}
                        />
                    </div>
                    <div className="postBody__bottom--input__button">
                        <CameraAltIcon
                            style={{
                                height: "20px",
                                width: "20px",
                                color: "gray",
                            }}
                        />
                    </div>
                    <div className="postBody__bottom--input__button">
                        <GifIcon
                            style={{
                                height: "30px",
                                width: "30px",
                                color: "gray",
                            }}
                        />
                    </div>
                    <div className="postBody__bottom--input__button">
                        <EmojiEventsIcon
                            style={{
                                height: "20px",
                                width: "20px",
                                color: "gray",
                            }}
                        />
                    </div>
                    
                    
                    
                    
                </div>

                

            </div>

            {
                    showComments ?
                    <div className="postBody__comments">
                        {
                            post.comments.map(comment => (
                                <PostComment 
                                    post={post}
                                    comment={comment}
                                />
                            ))
                        }
                        
                    </div>
                    :""
                }

        </div>
    )
}

export default PostBody
