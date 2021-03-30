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

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem("loggedInUser") === null){
            navigate("/")
        } else {
            axios.get(`http://localhost:8001/api/users/email/${localStorage.getItem("loggedInUser")}`)
                .then(res => {
                    dispatch(currentUser(res.data))
                })
        }
    })
    return (
        <div className="main">
            <div className="main__header">
                <MainHeader/>
                
            </div>
            <div className="main__body">
                <div className="main__bodySidebar">
                    <Sidebar />
                </div>

                <div className="main__bodyCenter">
                    <Feed />
                </div>

                <div className="main__bodyRightSidebar">
                    <RightSidebar />
                </div>
            </div>
            
            

            
        </div>
    )
}

export default Main
