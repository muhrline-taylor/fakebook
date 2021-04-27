import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const Video = ({ src }) => {
    
    return (
        <div>
            <ReactPlayer 
                url={src}
                width="100%"
                playing="true"
                volume="1"
                muted="true"
                controls="true"
            />
        </div>
    )
}

export default Video
