import { navigate } from '@reach/router'
import React, { useEffect, useState } from 'react'
import MainHeader from './MainHeader';
import "../static/css/Main.css";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../features/userSlice';
import Sidebar from "./Sidebar";
import Feed from './Feed';
import RightSidebar from './RightSidebar';
import { changeSidebar, selectSidebar } from '../features/sidebarSlice';
import Friends from './Friends';
import Groups from './Groups';
import Marketplace from './Marketplace';
import Watch from './Watch';
import Events from './Events';
import Memories from './Memories';
import Saved from './Saved';
import Pages from './Pages';
import FriendsSidebar from './FriendsSidebar';
import GroupsSidebar from './GroupsSidebar';
import MarketplaceSidebar from './MarketplaceSidebar';
import WatchSidebar from './WatchSidebar';
import EventsSidebar from './EventsSidebar';
import MemoriesSidebar from './MemoriesSidebar';
import SavedSidebar from './SavedSidebar';
import PagesSidebar from './PagesSidebar';
import MarketplaceNew from './MarketplaceNew';
import MarketplaceNewMain from './MarketplaceNewMain';
import { changeMarketplaceItem, selectMarketplaceItem } from '../features/marketplaceItemSlice';

const Main = () => {
    const dispatch = useDispatch();
    const sidebar = useSelector(selectSidebar);
    const marketplaceItemSelected = useSelector(selectMarketplaceItem);

    useEffect(() => {
        if(localStorage.getItem("loggedInUser") === null){
            navigate("/")
        } else {
            axios.get(`http://localhost:8001/api/users/email/${localStorage.getItem("loggedInUser")}`)
                .then(res => {
                    dispatch(currentUser(res.data))
                })
            if(sidebar === ""){
                dispatch(changeSidebar("feed"))
            }
        }
    })

    useEffect(() => {
        if(sidebar === "feed"){
            dispatch(changeMarketplaceItem(""))
        }
    })

    
    return (
        <div className="main">
            <div className="main__header">
                <MainHeader/>
                
            </div>
            <div className="main__body">
                <div className="main__bodySidebar">
                    {
                        sidebar === "" || sidebar === "feed" ?
                        <Sidebar />
                        :""
                    }
                    {
                        sidebar === "friends" ?
                        <FriendsSidebar />
                        :""
                    }
                    {
                        sidebar === "groups" ?
                        <GroupsSidebar />
                        :""
                    }
                    {
                        sidebar === "marketplace" ?
                        <MarketplaceSidebar />
                        :""
                    }
                    {
                        sidebar === "watch" ?
                        <WatchSidebar />
                        :""
                    }
                    {
                        sidebar === "events" ?
                        <EventsSidebar />
                        :""
                    }
                    {
                        sidebar === "memories" ?
                        <MemoriesSidebar />
                        :""
                    }
                    {
                        sidebar === "saved" ?
                        <SavedSidebar />
                        :""
                    }
                    {
                        sidebar === "pages" ?
                        <PagesSidebar />
                        :""
                    }
                    {
                        sidebar === "marketplaceNew" ?
                        <MarketplaceNew />
                        :""
                    }
                </div>

                <div className="main__bodyCenter">
                    {
                        sidebar === "" || sidebar === "feed" ?
                        <Feed />:
                        ""
                    }
                    {
                        sidebar === "friends" ?
                        <Friends />
                        :""
                    }
                    {
                        sidebar === "groups" ?
                        <Groups />
                        :""
                    }
                    {
                        sidebar === "marketplace" ?
                        <Marketplace />
                        :""
                    }
                    {
                        sidebar === "watch" ?
                        <Watch />
                        :""
                    }
                    {
                        sidebar === "events" ?
                        <Events />
                        :""
                    }
                    {
                        sidebar === "memories" ?
                        <Memories />
                        :""
                    }
                    {
                        sidebar === "saved" ?
                        <Saved />
                        :""
                    }
                    {
                        sidebar === "pages" ?
                        <Pages />
                        :""
                    }
                    {
                        sidebar === "marketplaceNew" ?
                        <MarketplaceNewMain />
                        :""
                    }
                </div>

                <div className="main__bodyRightSidebar">
                    {
                        sidebar === "feed" || sidebar === "" ?
                        <RightSidebar />
                        :""
                    }
                    
                </div>
            </div>
            
            

            
        </div>
    )
}

export default Main
