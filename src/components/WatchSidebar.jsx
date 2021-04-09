import React, { useEffect } from 'react';
import "../static/css/WatchSidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import Tab from './Tab';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import { useDispatch, useSelector } from 'react-redux';
import { changeWatchSidebar, selectWatchSidebar } from '../features/watchSidebarSlice';
import AvatarTab from './AvatarTab';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const WatchSidebar = () => {
    const dispatch = useDispatch();
    const watchSelected = useSelector(selectWatchSidebar);

    useEffect(() => {
        if(watchSelected === ""){
            dispatch(changeWatchSidebar("home"))
        }
    },[])


    return (
        <div className="watchSidebar">
            <div className="watchSidebar__header">
                <div className="watchSidebar__headerTop">
                    <h2>Watch</h2>
                    <div className="watchSidebar__headerTop--settings">
                        <SettingsIcon style={{ fontSize: 30 }}/>
                    </div>
                    
                </div>
                <div className="watchSidebar__headerSearch">
                    <SearchIcon />
                    <input 
                        type="text"
                        placeholder="Search videos"
                    />
                </div>
            </div>
                <div className="watchSidebar__main">
                    <div className="watchSidebar__mainTop">
                        <Tab 
                            component={<HomeIcon />}
                            name="Home"
                            clickHandler={() => dispatch(changeWatchSidebar("home"))}
                            active={watchSelected === "home"}
                        />
                        <Tab 
                            component={<MovieIcon />}
                            name="Shows"
                            clickHandler={() => dispatch(changeWatchSidebar("shows"))}
                            active={watchSelected === "shows"}
                        />
                        <Tab 
                            component={<LiveTvIcon />}
                            name="Live"
                            clickHandler={() => dispatch(changeWatchSidebar("live"))}
                            active={watchSelected === "live"}
                        />
                        <Tab 
                            component={<MusicNoteIcon />}
                            name="Music"
                            clickHandler={() => dispatch(changeWatchSidebar("music"))}
                            active={watchSelected === "music"}
                        />
                        <Tab 
                            component={<TurnedInIcon />}
                            name="Saved Videos"
                            clickHandler={() => dispatch(changeWatchSidebar("savedVideos"))}
                            active={watchSelected === "savedVideos"}
                        />
                    </div>
                    <div className="watchSidebar__mainBottom">
                        <div className="watchSidebar__mainBottom__header">
                            <p>Your Watchlist</p>
                            <p className="watchSidebar__mainBottom__header--p">
                                Manage
                            </p>
                        </div>
                        <Tab 
                            component={<PlayCircleFilledWhiteIcon />}
                            name="Latest Videos"
                            clickHandler={() => dispatch(changeWatchSidebar("latestVideos"))}
                            active={watchSelected === "latestVideos"}
                        />
                        <AvatarTab 
                            pic
                            name="test"
                            clickHandler={() => dispatch(changeWatchSidebar("test"))}
                            active={watchSelected === "test"}
                        />
                        <AvatarTab 
                            pic="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/1200px-BBC_News.svg.png"
                            name="BBC News"
                            clickHandler={() => dispatch(changeWatchSidebar("bbc"))}
                            active={watchSelected === "bbc"}
                        />
                        <AvatarTab 
                            pic="data:image/jpeg;base64,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"
                            name="Ben and Jerry's"
                            clickHandler={() => dispatch(changeWatchSidebar("bnj"))}
                            active={watchSelected === "bnj"}
                        />
                        <AvatarTab 
                            pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5W_GD8MGma5li-rDtiVtxce8iBIZbbIHKPiqbLoRnByLpsfoUHymtzLiG3lzYt5GHHzM&usqp=CAU"
                            name="NBC"
                            clickHandler={() => dispatch(changeWatchSidebar("nbc"))}
                            active={watchSelected === "nbc"}
                        />
                        <AvatarTab 
                            pic="https://www.verite.org/wp-content/uploads/Logos-and-Seals/CNN-White-on-Red-1.jpg"
                            name="CNN"
                            clickHandler={() => dispatch(changeWatchSidebar("cnn"))}
                            active={watchSelected === "cnn"}
                        />
                        <AvatarTab 
                            pic="https://www.nlgja.org/wp-content/uploads/2018/10/FOX-News-logo-2018-JPG.jpg"
                            name="Fox News"
                            clickHandler={() => dispatch(changeWatchSidebar("fox"))}
                            active={watchSelected === "fox"}
                        />
                        <AvatarTab 
                            pic="https://yt3.ggpht.com/ytc/AAUvwngnYd6LJhYm_-6EcHFEIVH8_xGBaHuw4kMV8RZ0mfk=s900-c-k-c0x00ffffff-no-rj"
                            name="MSNBC"
                            clickHandler={() => dispatch(changeWatchSidebar("msnbc"))}
                            active={watchSelected === "msnbc"}
                        />
                        <AvatarTab 
                            pic="https://i1.wp.com/globalriskinsights.com/wp-content/uploads/2016/03/Reuters-Logo.jpg?ssl=1"
                            name="Reuters"
                            clickHandler={() => dispatch(changeWatchSidebar("reuters"))}
                            active={watchSelected === "reuters"}
                        />
                        <AvatarTab 
                            pic="https://i.pinimg.com/originals/96/e6/d9/96e6d9e141ac42bf9aad1aaae0a15c61.jpg"
                            name="CBS News"
                            clickHandler={() => dispatch(changeWatchSidebar("cbs"))}
                            active={watchSelected === "cbs"}
                        />
                    </div>
                </div>
        </div>
    )
}

export default WatchSidebar
