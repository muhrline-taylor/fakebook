import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "../static/css/groups/Groups.css";
import GroupMainCard from "./groups/GroupMainCard.jsx";
import GroupSuggestion from './groups/GroupSuggestion';


const Groups = () => {
    const [groupPosts, setGroupPosts] = useState([]);
    const [groups, setGroups] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8001/api/groupPosts")
            .then(res => setGroupPosts(res.data.GroupPosts))
        axios.get("http://localhost:8001/api/groups")
            .then(res => setGroups(res.data.Groups))
    },[])

    

    return (
        <div className="groups">
            <div className="groupsL">
                <p>Recent Activity</p>
                {
                    groupPosts ?
                    groupPosts.map((groupPost, k) => (
                        <GroupMainCard groupPost={groupPost}/>
                    ))
                    :""
                }
                
            </div>
            <div className="groupsR">
                {
                    groups.length > 0 ?
                    <GroupSuggestion />
                    :""
                }
            </div>
        </div>
    )
}

export default Groups
