import React from 'react';
import "../static/css/PostPic.css";

const PostPic = ({ pic }) => {
    return (
        <div 
            className="postPic"
        >
            <img 
                src={pic}
            />
        </div>
    )
}

export default PostPic
