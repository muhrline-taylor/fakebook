import React from 'react';
import "../static/css/Landing.css";
import { Button } from '@material-ui/core';
import { Router, Link, navigate } from '@reach/router';
import AddUser from "./AddUser";
import LoginUser from "./LoginUser";


const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__header">
                <img 
                    src="https://seeklogo.com/images/F/facebook-logo-0AA7913C4D-seeklogo.com.png"
                    alt="facebook_logo"
                />
            </div>

            
            
            <div className="landing__main">
                <div className="landing__mainHeader">
                    <Button onClick={() => navigate("/users/login")}>Login</Button>
                    <Button onClick={() => navigate("/users/register")}>Register</Button>
                </div>
                
                <Router>
                    <AddUser path="/users/register"/>
                    <LoginUser path="/users/login" />
                </Router>
            </div>
        </div>
    )
}

export default Landing
