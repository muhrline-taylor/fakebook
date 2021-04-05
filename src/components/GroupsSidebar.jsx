import React, { useState, useEffect } from 'react';
import "../static/css/GroupsSidebar.css";
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { changeGroupsSidebar, selectGroupsSidebar } from '../features/groupsSidebarSlice';
import DomainIcon from '@material-ui/icons/Domain';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Button } from '@material-ui/core';
import GroupCard from './GroupCard';

const defaultPic = "https://i.pinimg.com/474x/10/45/8f/10458f2b832b62f013d97dbf10880bb3.jpg";
const defaultName = "Nature Lovers";
const defaultLastActive = "10m"

const GroupsSidebar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const groupsSelected = useSelector(selectGroupsSidebar);

    useEffect(() => {
        if(groupsSelected === ""){
            dispatch(changeGroupsSidebar("feed"))
        }
    },[])

    return (
        <div className="groupsSidebar">
            <div className="groupsSidebar__top">
                <div className="groupsSidebar__topHeader">
                    <h2>Groups</h2>
                    <div className="groupsSidebar__topHeader--settings">
                        <SettingsIcon style={{ fontSize: 30 }}/>
                    </div>
                    
                </div>
                <div className="groupsSidebar__topBody">
                    <div className="groupsSidebar__topBody--search">
                        <SearchIcon />
                        <input 
                            type="text" 
                            placeholder="Search Groups"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div 
                        className={`groupsSidebar__topBody--sidebar ${groupsSelected === "feed" && "groupsSidebar__topBody--sidebarActive"}`}
                        onClick={() => dispatch(changeGroupsSidebar("feed"))}
                    >
                        <div
                            className={`groupsSidebar__topBody--sidebarImg ${groupsSelected === "feed" && "groupsSidebar__topBody--sidebarImgActive"}`}
                        >
                            <DomainIcon />
                        </div>
                        
                        <p>Your Feed</p>
                    </div>
                    <div 
                        className={`groupsSidebar__topBody--sidebar ${groupsSelected === "discover" && "groupsSidebar__topBody--sidebarActive"}`}
                        onClick={() => dispatch(changeGroupsSidebar("discover"))}
                    >
                        <div
                            className={`groupsSidebar__topBody--sidebarImg ${groupsSelected === "discover" && "groupsSidebar__topBody--sidebarImgActive"}`}
                        >
                            <ExploreIcon />
                        </div>
                        
                        <p>Discover</p>
                    </div>
                    <div 
                        className={`groupsSidebar__topBody--sidebar ${groupsSelected === "notifications" && "groupsSidebar__topBody--sidebarActive"}`}
                        onClick={() => dispatch(changeGroupsSidebar("notifications"))}
                    >
                        <div
                            className={`groupsSidebar__topBody--sidebarImg ${groupsSelected === "notifications" && "groupsSidebar__topBody--sidebarImgActive"}`}
                        >
                            <NotificationsIcon />
                        </div>
                        
                        <p>Notifications</p>
                    </div>
                    <div className="groupsSidebar__topBody--button">
                        <p>+  Create New Group</p>
                    </div>
                </div>
                <div className="groupsSidebar__bottom">
                    <div className="groupsSidebar__bottomHeader">
                        <p>Groups You've Joined</p>
                    </div>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                    <GroupCard pic={defaultPic} name={defaultName} lastActive={defaultLastActive}/>
                </div>
            </div>
            
        </div>
    )
}

export default GroupsSidebar
