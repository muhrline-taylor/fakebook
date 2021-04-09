import React, { useEffect, useState } from 'react';
import "../static/css/MainHeader.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserList } from '../features/userSlice';
import { Avatar } from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { changeSidebar, selectSidebar } from '../features/sidebarSlice';
import { selectMarketplaceSidebar } from '../features/marketplaceSidebarSlice';

const MainHeader = ({  }) => {
    const [searchInput, setSearchInput] = useState("");
    const [isActive, setIsActive] = useState("home");
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const selected = useSelector(selectSidebar);
    const marketplaceSelected = useSelector(selectMarketplaceSidebar);

    

    useEffect(() => {
        if(localStorage.getItem("loggedInUser") === null){
            navigate("/")
        } else {
            axios.get(`http://localhost:8001/api/users/email/${localStorage.getItem("loggedInUser")}`)
                .then(res => {
                    setUser(res.data)
                })
        }
    },[])


    return (
        <div className="mainHeader">
            <div className="mainHeader__left">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" />
                <div className="mainHeader__leftInput">
                    <SearchIcon />
                    <input 
                        type="text"
                        placeholder="Search Facebook"
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="mainHeader__center">
                <div 
                    className={`mainHeader__centerIcon ${selected === "feed" && 'mainHeader__centerIcon--active'}`}
                    onClick={() => {
                        dispatch(changeSidebar("feed"))
                    }}
                >
                    <HomeIcon fontSize="large"/>
                </div>

                <div 
                    className={`mainHeader__centerIcon ${selected === "watch" && 'mainHeader__centerIcon--active'}`}
                    onClick={() => dispatch(changeSidebar("watch"))}
                >
                    <SubscriptionsIcon fontSize="large"/>
                </div>

                <div 
                    className={`mainHeader__centerIcon ${selected === "marketplace" && 'mainHeader__centerIcon--active'}`}
                    onClick={() => dispatch(changeSidebar("marketplace"))}
                >
                    <StorefrontIcon fontSize="large"/>
                </div>

                <div 
                    className={`mainHeader__centerIcon ${selected === "groups" && 'mainHeader__centerIcon--active'}`}
                    onClick={() => dispatch(changeSidebar("groups"))}
                >
                    <GroupIcon fontSize="large"/>
                </div>

                <div 
                    className={`mainHeader__centerIcon ${selected === "widgets" && 'mainHeader__centerIcon--active'}`}
                    onClick={() => dispatch(changeSidebar("widgets"))}
                >
                    <WidgetsIcon fontSize="large"/>
                </div>
                
            </div>

            <div className="mainHeader__right">
                <div className="mainHeader__rightAvatar">
                    {
                        user.Users !== undefined ?
                        <Avatar src={user.Users.pfp} />
                        :<Avatar />
                    }
                    {
                        user.Users !== undefined ?
                        <p>{user.Users.fname}</p>
                        :""
                    }
                </div>
                
                <div className="mainHeader__rightIcon">
                    <AddIcon />
                </div>

                <div className="mainHeader__rightIcon">
                    <MessageIcon />
                </div>

                <div className="mainHeader__rightIcon">
                    <NotificationsIcon />
                </div>

                <div className="mainHeader__rightIcon">
                    <ExpandMoreIcon />
                </div>
            </div>

        </div>
    )
}

export default MainHeader
