import React, { useEffect } from 'react';
import "C:/Users/13124/Desktop/Coding/Coding_Dojo/mern_stack/FullStack/REDUX/facebook-redux/src/static/css/groups/Pic.css";

const Pic = ({ src }) => {
    
    return (
        <div id="pic">
            <img 
                src={src}
            />
        </div>
    )
}

export default Pic
