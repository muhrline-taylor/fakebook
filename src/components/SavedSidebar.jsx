import React, { useEffect } from 'react'
import "../static/css/SavedSidebar.css";
import Tab from './Tab';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { useDispatch, useSelector } from 'react-redux';
import { changeSavedSidebar, selectSavedSidebar } from '../features/savedSidebarSlice';

const SavedSidebar = () => {
    const dispatch = useDispatch();
    const savedSelected = useSelector(selectSavedSidebar);

    useEffect(() => {
        if(savedSelected === ""){
            dispatch(changeSavedSidebar("saved"))
        }
    })

    return (
        <div className="savedSidebar">
            <div className="savedSidebar__top">
                <div className="savedSidebar__topHeader">
                    <h2>Saved</h2>
                    <p>Settings</p>
                </div>
                <Tab 
                    component={<PermMediaIcon />}
                    name="Saved Items"
                    clickHandler={() => dispatch(changeSavedSidebar("saved"))}
                    active={savedSelected === "saved"}
                />
            </div>
            <div className="savedSidebar__bottom">
                <div className="savedSidebar__bottomHeader">
                    <p>My Collections</p>
                </div>
                <div className="savedSidebar__bottomButton">
                    <p>+ Create New Collection</p>
                </div>
            </div>
        </div>
    )
}

export default SavedSidebar
