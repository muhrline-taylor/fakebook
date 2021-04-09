import React from 'react';
import "../static/css/MakePostButton.css";
import LiveTvIcon from '@material-ui/icons/LiveTv';

const MakePostButton = ({ component,  text }) => {
    return (
        <div className="makePostButton">
            <div className="makePostButton__container">
                {component}
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default MakePostButton
