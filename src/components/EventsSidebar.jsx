import React, { useEffect, useState } from 'react';
import "../static/css/EventsSidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import Tab from './Tab';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import CakeIcon from '@material-ui/icons/Cake';
import { useDispatch, useSelector } from 'react-redux';
import { changeEventsSidebar, selectEventsSidebar } from '../features/eventsSidebarSlice';
import EventCard from './EventCard';
import BrushIcon from '@material-ui/icons/Brush';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import DeckIcon from '@material-ui/icons/Deck';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import PanToolIcon from '@material-ui/icons/PanTool';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import TheatersIcon from '@material-ui/icons/Theaters';
import HealingIcon from '@material-ui/icons/Healing';

const EventsSidebar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const eventSelected = useSelector(selectEventsSidebar);

    useEffect(() => {
        if(eventSelected === ""){
            dispatch(changeEventsSidebar("home"))
        }
    },[])

    return (
        <div className="eventsSidebar">
            <div className="eventsSidebar__header">
                <h2>Events</h2>
                <div className="eventsSidebar__headerSearch">
                    <SearchIcon />
                    <input 
                        type="text"
                        placeholder="Search Events"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="eventsSidebar__main">
                <div className="eventsSidebar__mainTop">
                    <Tab 
                        component={<EventNoteIcon />}
                        name="Home"
                        clickHandler={() => dispatch(changeEventsSidebar("home"))}
                        active={eventSelected === "home"}
                    />
                    <Tab 
                        component={<PersonIcon />}
                        name="Your Events"
                        clickHandler={() => dispatch(changeEventsSidebar("yourEvents"))}
                        active={eventSelected === "yourEvents"}
                    />
                    <Tab 
                        component={<CakeIcon />}
                        name="Birthdays"
                        clickHandler={() => dispatch(changeEventsSidebar("birthdays"))}
                        active={eventSelected === "birthdays"}
                    />
                    <div className="eventsSidebar__mainTop--button">
                        <p>+ Create New Event </p>
                    </div>
                </div>
                <div className="eventsSidebar__mainMiddle">
                    <div className="eventsSidebar__mainMiddle__header">
                        <p>Your Upcoming Events</p>
                        <p className="eventsSidebar__mainMiddle__header--p">See All</p>
                    </div>
                    <EventCard 
                        pic="https://www.rollingstone.com/wp-content/uploads/2020/02/PrimusMainPressPhotoHi.jpg"
                        time="SUNDAY, JUL 25 - 7 PM CDT"
                        name="Primus St. Louis"
                        friendsGoing="Jane and 4 friends"
                    />
                    <EventCard 
                        pic="https://www.thepageant.com/wp-content/uploads/2019/10/DGD_Website.jpg"
                        time="SUNDAY, SEP 19 - 6:30 PM CDT"
                        name="Dance Gavin Dance at The Pageant"
                        friendsGoing="Jack and 13 friends"
                    />
                </div>
                <div className="eventsSidebar__mainBottom">
                    <div className="eventsSidebar__mainBottom__header">
                        <p style={{fontWeight: "500", fontSize: "18px"}}>Categories</p>
                    </div>
                    <Tab 
                        component={<BrushIcon />}
                        name="Art"
                        clickHandler={() => dispatch(changeEventsSidebar("art"))}
                        active={eventSelected === "art"}
                    />
                    <Tab 
                        component={<LoyaltyIcon />}
                        name="Causes"
                        clickHandler={() => dispatch(changeEventsSidebar("causes"))}
                        active={eventSelected === "causes"}
                    />
                    <Tab 
                        component={<EmojiEmotionsIcon />}
                        name="Comedy"
                        clickHandler={() => dispatch(changeEventsSidebar("comedy"))}
                        active={eventSelected === "comedy"}
                    />
                    <Tab 
                        component={<LocalDiningIcon />}
                        name="Crafts"
                        clickHandler={() => dispatch(changeEventsSidebar("crafts"))}
                        active={eventSelected === "crafts"}
                    />
                    <Tab 
                        component={<ArrowDownwardIcon />}
                        name="Dance"
                        clickHandler={() => dispatch(changeEventsSidebar("dance"))}
                        active={eventSelected === "dance"}
                    />
                    <Tab 
                        component={<LocalBarIcon />}
                        name="Drinks"
                        clickHandler={() => dispatch(changeEventsSidebar("drinks"))}
                        active={eventSelected === "drinks"}
                    />
                    <Tab 
                        component={<MovieFilterIcon />}
                        name="Film"
                        clickHandler={() => dispatch(changeEventsSidebar("film"))}
                        active={eventSelected === "film"}
                    />
                    <Tab 
                        component={<FitnessCenterIcon />}
                        name="Fitness"
                        clickHandler={() => dispatch(changeEventsSidebar("fitness"))}
                        active={eventSelected === "fitness"}
                    />
                    <Tab 
                        component={<RestaurantIcon />}
                        name="Food"
                        clickHandler={() => dispatch(changeEventsSidebar("food"))}
                        active={eventSelected === "food"}
                    />
                    <Tab 
                        component={<SportsEsportsIcon />}
                        name="Games"
                        clickHandler={() => dispatch(changeEventsSidebar("games"))}
                        active={eventSelected === "games"}
                    />
                    <Tab 
                        component={<DeckIcon />}
                        name="Gardening"
                        clickHandler={() => dispatch(changeEventsSidebar("gardening"))}
                        active={eventSelected === "gardening"}
                    />
                    <Tab 
                        component={<LocalHospitalIcon />}
                        name="Health"
                        clickHandler={() => dispatch(changeEventsSidebar("health"))}
                        active={eventSelected === "health"}
                    />
                    <Tab 
                        component={<HomeIcon />}
                        name="Home"
                        clickHandler={() => dispatch(changeEventsSidebar("home"))}
                        active={eventSelected === "home"}
                    />
                    <Tab 
                        component={<LocalLibraryIcon />}
                        name="Literature"
                        clickHandler={() => dispatch(changeEventsSidebar("literature"))}
                        active={eventSelected === "literature"}
                    />
                    <Tab 
                        component={<MusicNoteIcon />}
                        name="Music"
                        clickHandler={() => dispatch(changeEventsSidebar("music"))}
                        active={eventSelected === "music"}
                    />
                    <Tab 
                        component={<SettingsEthernetIcon />}
                        name="Networking"
                        clickHandler={() => dispatch(changeEventsSidebar("networking"))}
                        active={eventSelected === "networking"}
                    />
                    <Tab 
                        component={<CakeIcon />}
                        name="Party"
                        clickHandler={() => dispatch(changeEventsSidebar("party"))}
                        active={eventSelected === "party"}
                    />
                    <Tab 
                        component={<PanToolIcon />}
                        name="Religion"
                        clickHandler={() => dispatch(changeEventsSidebar("religion"))}
                        active={eventSelected === "religion"}
                    />
                    <Tab 
                        component={<LocalMallIcon />}
                        name="Shopping"
                        clickHandler={() => dispatch(changeEventsSidebar("shopping"))}
                        active={eventSelected === "shopping"}
                    />
                    <Tab 
                        component={<SportsSoccerIcon />}
                        name="Sports"
                        clickHandler={() => dispatch(changeEventsSidebar("sports"))}
                        active={eventSelected === "sports"}
                    />
                    <Tab 
                        component={<TheatersIcon />}
                        name="Theater"
                        clickHandler={() => dispatch(changeEventsSidebar("theater"))}
                        active={eventSelected === "theater"}
                    />
                    <Tab 
                        component={<HealingIcon />}
                        name="Wellness"
                        clickHandler={() => dispatch(changeEventsSidebar("wellness"))}
                        active={eventSelected === "wellness"}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default EventsSidebar
