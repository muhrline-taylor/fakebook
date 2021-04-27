import React from 'react';
import "../static/css/MakePostButton.css";
import LiveTvIcon from '@material-ui/icons/LiveTv';

const MakePostButton = ({ component,  text, size, textColor, ...props }) => {
    return (
        <div 
            className="makePostButton"
            style={{
                height: size,
            }}
            onClick={props.clickHandler}
        >
            <div className="makePostButton__container">
                {component}
                <p style={{
                    color: textColor,
                    fontSize: props.textSize
                }}>{text}</p>
            </div>
            
        </div>
    )
}

export default MakePostButton
