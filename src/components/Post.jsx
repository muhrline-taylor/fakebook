import { Avatar } from '@material-ui/core';
import React from 'react';
import "../static/css/Post.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PostBody from './PostBody';

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__leftHeader">
                    <Avatar 
                        src={post.userPfp}
                    />
                    <div className="post__leftHeader__body">
                        <div className="post__leftHeader__bodyTop">
                            <p>{post.userFName} {post.userLName}</p>
                        </div>
                        <div className="post__leftHeader__bodyBottom">
                            <p>11d</p>
                        </div>
                    </div>
                </div>
                {/* <div className="post__rightHeader">
                    <div className="post__rightHeaderL">

                    </div>
                    <div className="post__rightHeaderR">
                        
                    </div>
                </div> */}
                <div className="post__rightHeader">
                    <div className="post__rightHeaderL">

                    </div>
                    <div className="post__rightHeaderR">
                        <div className="post__rightHeaderR--icon">
                            <MoreHorizIcon />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="post__body">
                <PostBody post={post}/>
            </div>
            
        </div>
    )
}

export default Post
