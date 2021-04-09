import React, { useEffect } from 'react';
import "../static/css/MarketplaceSidebar.css";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import Tab from './Tab';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import { changeMarketplaceSidebar, selectMarketplaceSidebar } from '../features/marketplaceSidebarSlice';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import PanToolIcon from '@material-ui/icons/PanTool';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TheatersIcon from '@material-ui/icons/Theaters';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import BrushIcon from '@material-ui/icons/Brush';
import BuildIcon from '@material-ui/icons/Build';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PetsIcon from '@material-ui/icons/Pets';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const MarketplaceSidebar = () => {
    const dispatch = useDispatch();
    const selected = useSelector(selectMarketplaceSidebar);

    useEffect(() => {
        if(selected === ""){
            dispatch(changeMarketplaceSidebar("browseAll"))
        }
    },[])


    return (
        <div className="marketplaceSidebar">
            <div className="marketplaceSidebar__header">
                <div className="marketplaceSidebar__headerTop">
                    <h2>Marketplace</h2>
                    <div className="marketplaceSidebar__headerTop--settings">
                        <SettingsIcon style={{ fontSize: 30 }}/>
                    </div>
                    
                </div>
                <div className="marketplaceSidebar__headerSearch">
                    <SearchIcon />
                    <input 
                        type="text"
                        placeholder="Search Marketplace"
                    />
                </div>
            </div>
            <div className="marketplaceSidebar__body">
                <div className="marketplaceSidebar__bodyTabs">
                    <Tab 
                        component={<StorefrontIcon />} 
                        name="Browse All"   
                        active={selected === "browseAll"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("browseAll"))}
                    />
                    <Tab 
                        component={<LiveTvIcon />} 
                        name="Live Shopping" 
                        active={selected === "live"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("live"))}
                    />
                    <Tab 
                        component={<NotificationsIcon />} 
                        name="Notifications"
                        active={selected === "notifications"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("notifications"))}
                    />
                    <Tab 
                        component={<AllInboxIcon />} 
                        name="Inbox"
                        active={selected === "inbox"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("inbox"))}
                    />
                    <Tab 
                        component={<ShoppingCartIcon />} 
                        name="Cart"
                        active={selected === "cart"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("cart"))}
                    />
                    <Tab 
                        component={<PersonIcon />} 
                        name="Your Account"
                        active={selected === "account"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("account"))}
                    />
                    <div className="marketplaceSidebar__bodyButton">
                        <p>+ Create New Listing</p>
                    </div>
                </div>
                

                <div className="marketplaceSidebar__bodyFilters">
                    <p>Filters</p>
                    <div className="marketplaceSidebar__bodyFilters--location">
                        <p>Mehlville, Missouri - Within 40 miles</p>
                    </div>
                </div>

                <div className="marketplaceSidebar__bodyCategories">
                    <Tab 
                        component={<DriveEtaIcon />} 
                        name="Vehicles"
                        active={selected === "vehicles"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("vehicles"))}
                    />
                    <Tab 
                        component={<HomeIcon />} 
                        name="Property Rentals"
                        active={selected === "rentals"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("rentals"))}
                    />
                    <Tab 
                        component={<PanToolIcon />} 
                        name="Apparel"
                        active={selected === "apparel"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("apparel"))}
                    />
                    <Tab 
                        component={<ConfirmationNumberIcon />} 
                        name="Classifieds"
                        active={selected === "classifieds"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("classifieds"))}
                    />
                    <Tab 
                        component={<PhoneAndroidIcon />} 
                        name="Electronics"
                        active={selected === "electronics"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("electronics"))}
                    />
                    <Tab 
                        component={<TheatersIcon />} 
                        name="Entertainment"
                        active={selected === "entertainment"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("entertainment"))}
                    />
                    <Tab 
                        component={<FavoriteIcon />} 
                        name="Family"
                        active={selected === "family"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("family"))}
                    />
                    <Tab 
                        component={<FreeBreakfastIcon />} 
                        name="Free Stuff"
                        active={selected === "freeStuff"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("freeStuff"))}
                    />
                    <Tab 
                        component={<OutdoorGrillIcon />} 
                        name="Garden and Outdoor"
                        active={selected === "garden"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("garden"))}
                    />
                    <Tab 
                        component={<BrushIcon />} 
                        name="Hobbies"
                        active={selected === "hobbies"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("hobbies"))}
                    />
                    <Tab 
                        component={<HomeIcon />} 
                        name="Home Goods"
                        active={selected === "homeGoods"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("homeGoods"))}
                    />
                    <Tab 
                        component={<BuildIcon />} 
                        name="Home Improvement Supplies"
                        active={selected === "homeSupplies"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("homeSupplies"))}
                    />
                    <Tab 
                        component={<AttachMoneyIcon />} 
                        name="Home Sales"
                        active={selected === "homeSales"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("homeSales"))}
                    />
                    <Tab 
                        component={<MusicNoteIcon />} 
                        name="Musical Instruments"
                        active={selected === "musicalInstruments"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("musicalInstruments"))}
                    />
                    <Tab 
                        component={<ConfirmationNumberIcon />} 
                        name="Office Supplies"
                        active={selected === "officeSupplies"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("officeSupplies"))}
                    />
                    <Tab 
                        component={<PetsIcon />} 
                        name="Pet Supplies"
                        active={selected === "petSupplies"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("petSupplies"))}
                    />
                    <Tab 
                        component={<DirectionsRunIcon />} 
                        name="Sporting Goods"
                        active={selected === "sportingGoods"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("sportingGoods"))}
                    />
                    <Tab 
                        component={<VideogameAssetIcon />} 
                        name="Toys and Games"
                        active={selected === "toysGames"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("toysGames"))}
                    />
                    <Tab 
                        component={<PeopleAltIcon />} 
                        name="Groups"
                        active={selected === "groups"}
                        clickHandler={() => dispatch(changeMarketplaceSidebar("groups"))}
                    />
                </div>
            </div>

        </div>
    )
}

export default MarketplaceSidebar
