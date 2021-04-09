import React, { useEffect, useState } from 'react';
import "../static/css/MemoriesSidebar.css";
import Tab from './Tab';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch, useSelector } from 'react-redux';
import { changeMemoriesSidebar, selectMemoriesSidebar } from '../features/memoriesSidebarSlice';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventBusyIcon from '@material-ui/icons/EventBusy';

const MemoriesSidebar = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const dispatch = useDispatch();
    const memorySelected = useSelector(selectMemoriesSidebar);

    useEffect(() => {
        if(memorySelected === ""){
            dispatch(changeMemoriesSidebar("home"))
        }
    },[])

    return (
        <div className="memoriesSidebar">
            <div className="memoriesSidebar__header">
                <h2>Memories</h2>
                <Tab 
                    component={<HomeIcon />}
                    name="Memories Home"
                    clickHandler={() => dispatch(changeMemoriesSidebar("home"))}
                    active={memorySelected === "home"}
                />
            </div>
            <div className="memoriesSidebar__body">
                <div className="memoriesSidebar__bodyHeader">
                    <p>Settings</p>
                </div>
                <Tab 
                    component={<NotificationsActiveIcon />}
                    name="Notifications"
                    clickHandler={() => dispatch(changeMemoriesSidebar("notifications"))}
                    active={memorySelected === "notifications"}
                />
                <Tab 
                    component={<PeopleAltIcon />}
                    name="Hide People"
                    clickHandler={() => dispatch(changeMemoriesSidebar("hidePeople"))}
                    active={memorySelected === "hidePeople"}
                />
                <Tab 
                    component={<EventBusyIcon />}
                    name="Hide Dates"
                    clickHandler={() => dispatch(changeMemoriesSidebar("hideDates"))}
                    active={memorySelected === "hideDates"}
                />
            </div>
        </div>
    )
}

export default MemoriesSidebar
