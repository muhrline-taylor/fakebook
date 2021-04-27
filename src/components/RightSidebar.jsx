import { Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "../static/css/RightSidebar.css";
import SidebarAd from './SidebarAd';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Friend from './Friend';
import axios from 'axios';
import Button2 from "./Button2";

const RightSidebar = () => {
    const url = "https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png";
    const [friendsList, setFriendsList] = useState([
        
    ]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/users")
            .then(res => setFriendsList(res.data.Users))
    },[]);

    

    return(
        <div className="rightSidebar">
            <p>Sponsored</p>
            <div className="rightSidebar__sidebarAd--container">
                <SidebarAd 
                    pic="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/they-live-covid-face-mask-obey-aloha-art.jpg"
                    name="OBEY"
                    link="https://www.obey.gov"
                />
            </div>
            <div className="rightSidebar__sidebarAd--container">
                <SidebarAd 
                    pic="https://res.cloudinary.com/teepublic/image/private/s--kD8RJsz8--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_709,w_1260,x_-76,y_-49/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_709,w_1260/fl_layer_apply,g_north_west,x_-76,y_-49/bo_180px_solid_white/e_overlay,fl_layer_apply,h_709,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1501770538/production/designs/1788985_1.jpg"
                    name="CONSUME"
                    link="https://www.consume.gov"
                />
            </div>
            <div className="rightSidebar--line" />
            
            <div className="rightSidebar__bottomHeader">
                <p>Contacts</p>
                <div className="rightSidebar__bottomHeader__buttons">
                    <div className="rightSidebar__bottomHeader__button">
                        <VideoCallIcon style={{
                            color: "#5B626A"
                        }}/>
                    </div>
                    <div className="rightSidebar__bottomHeader__button">
                        <SearchIcon style={{
                            color: "#5B626A"
                        }}/>
                    </div>
                    <div className="rightSidebar__bottomHeader__button">
                        <MoreHorizIcon style={{
                            color: "#5B626A"
                        }}/>
                    </div>
                    
                    
                    
                </div>
            </div>

            <div className="rightSidebar__contacts">
                {
                friendsList ?
                <>
                    {
                        friendsList.map((friend, k) => (
                            <Friend 
                                friendName={`${friend.fname} ${friend.lname}`}
                                pfp={friend.pfp}
                            />
                        ))
                    }
                </>
                :""
                }
                
            </div>
            

        </div>
    );
}


export default RightSidebar
