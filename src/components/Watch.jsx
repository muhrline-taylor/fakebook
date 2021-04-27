import { FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import "../static/css/Watch.css";
import WatchCard from './WatchCard';

const Watch = () => {
    return (
        <div className="watch">

            <div className="watch__notifications">
                <div className="watch__notificationsL">
                    <FiberManualRecord style={{
                        color: "#1876F2",
                        height: "15px",
                    }}/>
                    <p>Notifications</p>
                </div>
                <div className="watch__notificationsM">
                    <p>- 11 Pages posted new videos</p>
                </div>
                <div className="watch__notificationsR">
                    <div className="watch__notificationsR--button">
                        <p>See All</p>
                    </div>
                </div>
            </div>

            <div className="watch__card">
                <WatchCard 
                    text="Dummy text lorem ipsam opelia"
                    text2="Dummy text lorem ipsam opelia"
                    video="https://www.youtube.com/watch?v=iNXBWuYSmBk" 
                />
            </div>
            
            


        </div>
    )
}

export default Watch
