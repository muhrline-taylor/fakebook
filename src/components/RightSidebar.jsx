import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import "../static/css/RightSidebar.css";
import SidebarAd from './SidebarAd';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Friend from './Friend';

const RightSidebar = () => {
    const url = "https://www.pinclipart.com/picdir/middle/209-2098523_individuals-person-icon-circle-png-clipart.png"

    const [friends, setFriends] = useState([
        {"Caitlin": url},
        {"Grace": url},
        {"Joe": url},
        {"Gina": url},
        {"Jane": url},
        {"Jack": url},
        {"Frank": url},
        {"Jill": url},
        {"Bob": url},
        {"Donnie": url},
        {"Billy": url},
        {"Sarah": url},
        {"Isaac": url},
        {"Jan": url},
        {"Amanda": url},
        {"Stacy": url},
        {"Julie": url},
        {"Tyler": url},
        {"Darby": url},
        {"Corey": url}
    ])

    return (
        <div className="rightSidebar">
            <div className="rightSidebar__sponsered">
                <h4>Sponsored</h4>
                <SidebarAd 
                    pic="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/they-live-covid-face-mask-obey-aloha-art.jpg"
                    name="OBEY"
                    link="https://www.obey.gov"
                />
                <SidebarAd 
                    pic="https://res.cloudinary.com/teepublic/image/private/s--kD8RJsz8--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_709,w_1260,x_-76,y_-49/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_709,w_1260/fl_layer_apply,g_north_west,x_-76,y_-49/bo_180px_solid_white/e_overlay,fl_layer_apply,h_709,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1501770538/production/designs/1788985_1.jpg"
                    name="CONSUME"
                    link="https://www.consume.gov"
                />
            </div>
            <div className="rightSidebar__requests">
                <div className="rightSidebar__requestsHeader">
                    <h3>Friend Requests</h3>
                    <p>See All</p>
                </div>
                <div className="rightSidebar__requestsBody">
                    <div className="rightSidebar__requestsBody--pic">
                        <img src="https://icon-library.com/images/generic-user-icon/generic-user-icon-15.jpg" alt="generic_user_img" />
                    </div>
                    <div className="rightSidebar__requestsBody__main">
                        <div className="rightSidebar__requestsBody__main--content">
                            <h4>Jane Doe</h4>
                            <p>37 mutual friends</p>
                        </div>
                        <div className="rightSidebar__requestsBody__main--buttons">
                            <Button 
                                variant="contained" 
                                color="primary"
                            >Confirm</Button>
                            <Button
                                variant="contained"
                            >Delete</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="rightSidebar__contacts">
                <div className="rightSidebar__contactsHeader">
                    <h3>Contacts</h3>
                    <div className="rightSidebar__contactsHeader--icons">
                        <VideoCallIcon />
                        <SearchIcon />
                        <MoreHorizIcon />
                    </div>
                    
                </div>
                <div className="rightSidebar__contactsBody">
                    {
                        friends ?
                        <>
                            {
                                friends.map((friend, k) => (
                                    <Friend 
                                        friendName={Object.keys(friend)}
                                        pfp={Object.values(friend)}
                                    />
                                ))
                            }
                        </>
                        :""
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
