import React from 'react';
import { useSelector } from 'react-redux';
import "../static/css/CreateStory.css";
import { selectUserList } from "../features/userSlice";

const CreateStory = () => {
    const user = useSelector(selectUserList);

    return (
        <div className="createStory">
            <div className="createStory__top">
                {
                    user.Users ?
                    <img 
                        src={user.Users.pfp}
                    />
                    :""
                }
            </div>
            <div className="createStory__bottom">
                <div className="createStory__bottom--line">
                    <p>Create</p>
                </div>
                <div className="createStory__bottom--line">
                    <p>Story</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default CreateStory
