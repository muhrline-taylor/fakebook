import React from 'react';
import "../static/css/MakePostButton.css";
import LiveTvIcon from '@material-ui/icons/LiveTv';

const MakePostButton = ({ component,  text, size, clickHandler, textColor }) => {
    return (
        <div 
            className="makePostButton"
            style={{
                height: size
            }}
            onClick={clickHandler}
        >
            <div className="makePostButton__container">
                {component}
                <p style={{
                    color: textColor
                }}>{text}</p>
            </div>
            
        </div>
    )
}

export default MakePostButton
