import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserList } from '../features/userSlice';
import "../static/css/Sidebar.css";
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import StoreIcon from '@material-ui/icons/Store';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import EventIcon from '@material-ui/icons/Event';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { changeSidebar, selectSidebar } from '../features/sidebarSlice';
import AvatarTab from "./AvatarTab";
import Tab from './Tab';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ShortcutCard from './ShortcutCard';

const Sidebar = ({  }) => {
    const user = useSelector(selectUserList);
    const [isActive, setIsActive] = useState("");
    const dispatch = useDispatch();
    const selected = useSelector(selectSidebar);


    return (
        <div className="sidebar">
            <div className="sidebar__options">
                <div className="sidebar__option">
                    {
                        user.Users ?
                        <>
                            <Avatar 
                                src={user.Users.pfp}
                            />
                            <p>{user.Users.fname}&nbsp;{user.Users.lname}</p>
                        </>
                        :""
                    }
                    
                </div>

                <div className=
                    {`sidebar__option ${selected === "friends" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("friends")
                        dispatch(changeSidebar("friends"))
                    }}
                >
                    <PeopleIcon
                        fontSize="large"
                        style={{color: "rgb(92, 129, 209)"}}
                    />
                    <p>Friends</p>
                </div>

                <div className={`sidebar__option ${selected === "marketplace" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("marketplace")
                        dispatch(changeSidebar("marketplace"))
                    }}
                >
                    <StoreIcon 
                        fontSize="large"
                        style={{color: "rgb(92, 129, 209)"}}
                    />
                    <p>Marketplace</p>
                </div>

                <div className={`sidebar__option ${selected === "groups" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("groups")
                        dispatch(changeSidebar("groups"))
                    }}
                >
                    <GroupAddIcon 
                        fontSize="large"
                        style={{color: "rgb(1, 167, 1, 0.7)"}}
                    />
                    <p>Groups</p>
                </div>

                <div className={`sidebar__option ${selected === "watch" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("watch")
                        dispatch(changeSidebar("watch"))
                    }}
                >
                    <PlayCircleFilledIcon 
                        fontSize="large"
                        style={{color: "red"}}
                    />
                    <p>Watch</p>
                </div>

                <div className={`sidebar__option ${selected === "events" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("events")
                        dispatch(changeSidebar("events"))
                    }}
                >
                    <EventIcon 
                        fontSize="large"
                        style={{color: "black"}}
                    />
                    <p>Events</p>
                </div>

                <div className={`sidebar__option ${selected === "memories" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("memories")
                        dispatch(changeSidebar("memories"))
                    }}
                >
                    <HistoryIcon 
                        fontSize="large"
                        style={{color: "rgb(255, 187, 0)"}}
                    />
                    <p>Memories</p>
                </div>

                <div className={`sidebar__option ${selected === "saved" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("saved")
                        dispatch(changeSidebar("saved"))
                    }}
                >
                    <BookmarkIcon 
                        fontSize="large"
                        style={{color: "rgb(97, 1, 97)"}}
                    />
                    <p>Saved</p>
                </div>

                <div className={`sidebar__option ${selected === "pages" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("pages")
                        dispatch(changeSidebar("pages"))
                    }}
                >
                    <FlagIcon 
                        fontSize="large"
                        style={{color: "rgb(240, 130, 1, 0.8)"}}
                    />
                    <p>Pages</p>
                </div>

                <div className={`sidebar__option ${selected === "recent" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("recent")
                        dispatch(changeSidebar("recent"))
                    }}
                >
                    <ScheduleIcon
                        fontSize="large"
                        color="primary"
                    />
                    <p>Most Recent</p>
                </div>
                <div className="sidebar__optionTab">
                    {/* HOVER NOT WORKING RIGHT */}
                    <Tab 
                        component={<ExpandMoreIcon />}
                        clickHandler={() => {
                            dispatch("seeMore")
                            setIsActive("seeMore")
                        }}
                        name="See More"
                        active={selected === "seeMore"}
                    />
                </div>
                
                
                
            </div>
            <div className="sidebar__shortcuts">
                <div className="sidebar__shortcutsHeader">
                    <p>Your Shortcuts</p>
                    
                    <p className="sidebar__shortcutsHeaderP">Edit</p>
                </div>
                <ShortcutCard 
                    pic="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"
                    name="foods with threatening auras"
                />
            </div>
        </div>
    )
}

export default Sidebar
