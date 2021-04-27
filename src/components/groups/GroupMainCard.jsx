import { Avatar } from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "C:/Users/13124/Desktop/Coding/Coding_Dojo/mern_stack/FullStack/REDUX/facebook-redux/src/static/css/groups/GroupMainCard.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PeopleIcon from '@material-ui/icons/People';
import Video from "./Video";
import Pic from './Pic';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MakePostButton from '../MakePostButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserList } from '../../features/userSlice';
import { changeSidebar, selectSidebar } from '../../features/sidebarSlice';
import PostComment from '../PostComment';

const GroupMainCard = ({ groupPost }) => {
    const [user, setUser] = useState({});
    const [group, setGroup] = useState({});
    const loggedUser = useSelector(selectUserList);
    const [input, setInput] = useState("");
    const [likedColor, setLikedColor] = useState("rgb(0, 0, 0, 0.6)");
    const [viewComments, setViewComments] = useState(false);

    
    useEffect(() => {
        axios.get(`http://localhost:8001/api/users/email/${groupPost.userEmail}`)
            .then(res => setUser(res.data.Users));
        axios.get(`http://localhost:8001/api/groups/${groupPost.groupId}`)
            .then(res => setGroup(res.data.Groups))
    },[])

    const submitHandler = e => {
        e.preventDefault();
        const form = {
            "comments": [{
                "userEmail": loggedUser.Users.email,
                "comment": e.target[0].value
            }, ...groupPost.comments]
        };
        axios.put(`http://localhost:8001/api/groupPosts/update/${groupPost._id}`, form)
        window.location.reload();
    }

    const likeHandler = () => {
        var temp = 0
        groupPost.likes.map((like, k) => {
            if(like === localStorage.getItem("loggedInUser")){
                temp = 1
            }
        })
        if(temp === 0){
            const form = {
                "likes": [
                    localStorage.getItem("loggedInUser"),
                    ...groupPost.likes
                ]
            }
            axios.put(`http://localhost:8001/api/groupPosts/update/${groupPost._id}`, form)
        } else {
            var form = {
                "likes": []
            }
            groupPost.likes.map((like, k) => {
                if(like !== localStorage.getItem("loggedInUser")){
                    form.likes.push(like)
                }
            })
            axios.put(`http://localhost:8001/api/groupPosts/update/${groupPost._id}`, form)
        }
        window.location.reload();
    }

    useEffect(() => {
        groupPost.likes.map((like, k) => {
            if(like === localStorage.getItem("loggedInUser")){
                setLikedColor("#1977F2")
            }
        })
    })

    return (
        <div className="groupMainCard">


            {/* HEADER + TEXT */}
            <div className="groupMainCard__content">
                <div className="groupMainCard__contentHeader">
                    <div className="groupMainCard__contentHeader--avatar">
                        <Avatar 
                            src={user.pfp}
                        />
                    </div>
                    <div className="groupMainCard__contentHeader__text">
                        <div className="groupMainCard__contentHeader__textTop">
                            <p className="groupMainCard__contentHeader__textTop--userName">
                                {user.fname} {user.lname}
                            </p>
                            <ChevronRightIcon 
                                style={{
                                    height: "15px",
                                    width: "15px",
                                }}
                            />
                            <p className="groupMainCard__contentHeader__textTop--groupName">
                                {group.title}
                            </p>
                        </div>
                        <div className="groupMainCard__contentHeader__textBottom">
                            <p>2h</p>-&nbsp;
                            <PeopleIcon 
                                style={{
                                    height: "16px",
                                    width: "16px",
                                    color: "rgba(97, 96, 96, 0.8)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="groupMainCard__contentHeader--mui">
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>

            <div className="groupMainCard__text">
                {
                    groupPost.text ?
                    <div className="groupMainCard__textMain">
                        <p>
                            {groupPost.text}
                        </p>
                    </div>
                    :""
                }
            </div>


            {/* PIC / VIDEO **OPTIONAL */}
            <div className="groupMainCard__media">
                {
                    groupPost.video ?
                    // VIDEO 
                    <Video 
                        src={groupPost.video}
                    />
                    // <Pic 
                    //     src={groupPost.pic}
                    // />
                    :
                    // PIC
                    // <Video 
                    //     src={groupPost.video}
                    // />
                    <Pic 
                        src={groupPost.pic}
                    />
                }
            </div>


            {/* REACTIONS + COMMENTS */}
            <div className="groupMainCard__interact">
                <div className="groupMainCard__interactReactions">
                    <div className="groupMainCard__interactReactionsL">
                        <div className="groupMainCard__interactReactionsL--like">
                            <ThumbUpAltIcon 
                                style={{
                                    color: "white",
                                    height: "16px",
                                    width: "16px",
                                }}
                            />
                        </div>
                        <p>{groupPost.likes.length}</p>
                    </div>
                    <div className="groupMainCard__interactReactionsR">
                        <p>{groupPost.comments.length} Comment{
                            groupPost.comments.length !== 1 ?
                            <>s</>
                            :""
                        }</p>&nbsp;&nbsp;&nbsp;
                        <p>0 Shares</p>
                    </div>
                </div>
                <div className="groupMainCard__interactButtons">
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
                                color: "#606266",
                                height: "28px",
                                width: "28px",
                            }}
                        />}
                        text="Comment"
                        clickHandler
                        size="83%"
                        textColor="#606266"
                    />
                    <MakePostButton 
                        component={<ShareIcon
                            style={{
                                color: "#606266",
                                height: "28px",
                                width: "28px",
                            }}
                        />}
                        text="Share"
                        clickHandler
                        size="83%"
                        textColor="#606266"
                    />
                </div>
                {
                    groupPost.comments.length > 0 && viewComments === false ?
                    <div className="groupMainCard__interactComments">
                        <p onClick={() => setViewComments(true)}>View comments</p>
                    </div>
                    :""
                }
                {
                    viewComments === true ?
                    <div className="groupMainCard__interactCommentsContainer">
                        {
                            groupPost.comments.map((comment, k) => (
                                <PostComment 
                                    comment={comment} 
                                    post={groupPost}
                                    margin="2.2%"
                                />
                            ))
                        }
                    </div>
                    :""
                }
                <div className="groupMainCard__interactComment">
                    <Avatar 
                        src={loggedUser.Users.pfp}
                        style={{
                            height: "30px",
                            width: "30px",
                        }}
                    />
                    <div className="groupMainCard__interactComment--input">
                        <form onSubmit={submitHandler}>
                            <input 
                                placeholder="Write a comment..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                            />
                            <button type="submit" style={{display: "none"}} />
                        </form>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GroupMainCard
