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
                            <h4>{user.Users.fname}&nbsp;{user.Users.lname}</h4>
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
                        color="primary"
                        
                    />
                    <h4>Friends</h4>
                </div>

                <div className={`sidebar__option ${selected === "groups" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("groups")
                        dispatch(changeSidebar("groups"))
                    }}
                >
                    <GroupAddIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Groups</h4>
                </div>

                <div className={`sidebar__option ${selected === "marketplace" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("marketplace")
                        dispatch(changeSidebar("marketplace"))
                    }}
                >
                    <StoreIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Marketplace</h4>
                </div>

                <div className={`sidebar__option ${selected === "watch" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("watch")
                        dispatch(changeSidebar("watch"))
                    }}
                >
                    <PlayCircleFilledIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Watch</h4>
                </div>

                <div className={`sidebar__option ${selected === "events" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("events")
                        dispatch(changeSidebar("events"))
                    }}
                >
                    <EventIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Events</h4>
                </div>

                <div className={`sidebar__option ${selected === "memories" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("memories")
                        dispatch(changeSidebar("memories"))
                    }}
                >
                    <HistoryIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Memories</h4>
                </div>

                <div className={`sidebar__option ${selected === "saved" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("saved")
                        dispatch(changeSidebar("saved"))
                    }}
                >
                    <BookmarkIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Saved</h4>
                </div>

                <div className={`sidebar__option ${selected === "pages" && 'sidebar__option--active'}`}
                    onClick={() => {
                        setIsActive("pages")
                        dispatch(changeSidebar("pages"))
                    }}
                >
                    <FlagIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Pages</h4>
                </div>

                <div className="sidebar__option">
                    <ExpandMoreIcon 
                        fontSize="large"
                    />
                    <h4>See More</h4>
                </div>
            </div>
            <div className="sidebar__shortcuts">
                <div className="sidebar__shortcutsHeader">
                    <h4>Your Shortcuts</h4>
                    <p className="sidebar__shortcutsHeaderP">Edit</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
