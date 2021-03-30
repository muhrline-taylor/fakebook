import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
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

const Sidebar = ({  }) => {
    const user = useSelector(selectUserList)
    console.log(user)
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

                <div className="sidebar__option">
                    <PeopleIcon
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Friends</h4>
                </div>

                <div className="sidebar__option">
                    <GroupAddIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Groups</h4>
                </div>

                <div className="sidebar__option">
                    <StoreIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Marketplace</h4>
                </div>

                <div className="sidebar__option">
                    <PlayCircleFilledIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Watch</h4>
                </div>

                <div className="sidebar__option">
                    <EventIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Events</h4>
                </div>

                <div className="sidebar__option">
                    <HistoryIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Memories</h4>
                </div>

                <div className="sidebar__option">
                    <BookmarkIcon 
                        fontSize="large"
                        color="primary"
                    />
                    <h4>Saved</h4>
                </div>

                <div className="sidebar__option">
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
