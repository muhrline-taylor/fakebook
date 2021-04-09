import React from 'react';
import "../static/css/Tab.css";

const Tab = ({ component, name, clickHandler, active }) => {
    return (
        <div 
            className={`tab ${active === true && "tab--active"}`}
            onClick={clickHandler}
        >
            <div
                className={`tab__icon ${active === true && "tab__icon--active"}`}
            >
                {component}
            </div>
            
            <p>{name}</p>
        </div>
    )
}

export default Tab
