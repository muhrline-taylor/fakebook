import React from 'react';
import "../static/css/PostText.css";

const PostText = ({ text }) => {
    return (
        <div className="postText">
            <p>{text}</p>
        </div>
    )
}

export default PostText
