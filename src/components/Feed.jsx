import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserList } from '../features/userSlice';
import "../static/css/Feed.css";
import CreateStory from './CreateStory';
import MakePostButton from './MakePostButton';
import Story from './Story';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CreateRoom from './CreateRoom';
import Post from './Post';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import axios from 'axios';

const Feed = () => {
    const user = useSelector(selectUserList);
    const [postInput, setPostInput] = useState();
    const [posts, setPosts] = useState([]);
    const [imgUrl, setImgUrl] = useState();
    
    useEffect(() => {
        axios.get("http://localhost:8001/api/posts")
            .then(res => setPosts(res.data.Posts))
    },[])

    const submitHandler = e => {
        e.preventDefault();
        if(user.Users){
            var form = {
                userFName: user.Users.fname,
                userLName: user.Users.lname,
                userEmail: user.Users.email,
                userPfp: user.Users.pfp,
                text: postInput,
                pic: imgUrl,
                comments: [],
                likes: [],
            }
            axios.post("http://localhost:8001/api/posts/new", form)
            .then(res => {
                if(res.data.error) {
                    console.log(res.data.error)
                } else {
                    window.location.reload();
                }
            })
        }
        
    }


    return (
        <div className="feed">
            <div className="feed__stories">
                <CreateStory />
                <Story 
                    img="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"
                    pfp="https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg"
                    fname="Terry"
                    lname="Crews"
                />
                <Story 
                    img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*"
                    pfp="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/BillyBobThorntonHWOFFeb2012crop.JPG/220px-BillyBobThorntonHWOFFeb2012crop.JPG"
                    fname="Billy Bob"
                    lname="Thorton"
                />
                <Story 
                    img="https://assets.dmagstatic.com/wp-content/uploads/2019/09/lolos-chicken-and-waffles-horizontal.jpg"
                    pfp="https://womans-worth.com/wp-content/uploads/smiling-woman.jpg"
                    fname="Stacy"
                    lname="Smith"
                />
                <Story 
                    img="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_worst_brunch_slideshow/1800ss_unsplash_rf_stack_of_pancakes.jpg?resize=700px:*"
                    pfp="https://i.pinimg.com/564x/83/98/6e/83986e02daed8dc614c8f02a7b5ce77f.jpg"
                    fname="Grace"
                    lname="Singing"
                />
            </div>
            {
                user.Users ?
                <div className="feed__makePost">
                    <div className="feed__makePostTop">
                        <Avatar 
                            src={user.Users.pfp}
                        />
                        <div className="feed__makePostTop--input">
                            <form onSubmit={submitHandler}>
                                <input 
                                    placeholder={`What's on your mind, ${user.Users.fname}?`}
                                    onChange={e => setPostInput(e.target.value)}
                                    value={postInput}
                                />
                                <button type="submit"></button>
                            </form>
                            
                        </div>
                    </div>
                    <div className="feed__makePostBottom">
                        <MakePostButton 
                            component={<VideoCallIcon 
                                style={{
                                    color: "rgba(255, 0, 0, 0.7)",
                                    height: "35px",
                                    width: "35px",
                                }}
                            />}
                            clickHandler={() => {}}
                            size="120%"
                            text="Live Video"
                        />
                        <MakePostButton 
                            component={<PhotoLibraryIcon 
                                style={{
                                    color: "rgb(1, 167, 1, 0.7)",
                                    height: "30px",
                                    width: "30px",
                                }}
                            />}
                            size="120%"
                            clickHandler={() => {
                                setImgUrl(prompt("Enter image URL"))
                            }}
                            text="Photo/Video"
                        />
                        <MakePostButton 
                            component={<InsertEmoticonIcon 
                                style={{
                                    color: "rgb(255, 187, 0)",
                                    height: "32px",
                                    width: "32px",
                                }}
                                clickHandler={() => {}}
                            />}
                            size="120%"
                            text="Feeling/Activity"
                        />
                    </div>
                </div>
                :""
            }
            <div className="feed__rooms">
                <CreateRoom />
            </div>
            {
                posts.length > 0 ?
                posts.map((post, k) => (
                    <Post post={post}/>
                ))
                :""
            }
            <div className="feed__footer">

            </div>
        </div>
    )
}

export default Feed
