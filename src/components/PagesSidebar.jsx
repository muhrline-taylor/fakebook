import React, { useEffect } from 'react';
import "../static/css/PagesSidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from './Button';
import Tab from "./Tab";
import ExploreIcon from '@material-ui/icons/Explore';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useDispatch, useSelector } from 'react-redux';
import { changePagesSidebar, selectPagesSidebar } from '../features/pagesSidebarSlice';

const PagesSidebar = () => {
    const dispatch = useDispatch();
    const pagesSelected = useSelector(selectPagesSidebar);

    useEffect(() => {
        if(pagesSelected === ""){
            dispatch(changePagesSidebar("discover"))
        }
    })

    return (
        <div className="pagesSidebar">
            <div className="pagesSidebar__top">
                <div className="pagesSidebar__topHeader">
                    <h2>Pages</h2>
                    <div className="pagesSidebar__topHeader--settings">
                        <SettingsIcon />
                    </div>
                </div>
                <div className="pagesSidebar__topButton">
                    <Button />
                </div>
                <div className="pagesSidebar__bottom">
                    <Tab 
                        component={<ExploreIcon />}
                        name="Discover"
                        clickHandler={() => dispatch(changePagesSidebar("discover"))}
                        active={pagesSelected === "discover"}
                    />
                    <Tab 
                        component={<ThumbUpAltIcon />}
                        name="Liked Pages"
                        clickHandler={() => dispatch(changePagesSidebar("likedPages"))}
                        active={pagesSelected === "likedPages"}
                    />
                    <Tab 
                        component={<PersonAddIcon />}
                        name="Invites"
                        clickHandler={() => dispatch(changePagesSidebar("invites"))}
                        active={pagesSelected === "invites"}
                    />
                </div>
            </div>
        </div>
    )
}

export default PagesSidebar
