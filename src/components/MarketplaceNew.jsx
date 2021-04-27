import React, { useState, useEffect } from 'react';
import "../static/css/MarketplaceNew.css";
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebar, changeSidebar } from '../features/sidebarSlice';
import Tab from './Tab';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HelpIcon from '@material-ui/icons/Help';
import { selectMarketplaceItem } from '../features/marketplaceItemSlice';
import MarketplaceAdd from './MarketplaceAdd';
import axios from 'axios';
import { selectUserList } from '../features/userSlice';


const MarketplaceNew = () => {
    const dispatch = useDispatch();
    const sidebarSelected = useSelector(selectSidebar);
    const marketplaceItemSelected = useSelector(selectMarketplaceItem);
    const user = useSelector(selectUserList);
    const [form, setForm] = useState({
        photo: "",
        title: "",
        price: "",
        category: "",
        condition: "New",
        description: "",
        user: user.Users.email,
    })

    const changeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
        axios.post("http://localhost:8001/api/saleItems/new", form)
            .then(setForm({
                photo: "",
                title: "",
                price: "",
                category: "",
                condition: "New",
                description: "",
                user: user.Users.email,
            }))
            .catch(err => console.log(err))
    }


    return (
        <div className="marketplaceNew">
            {
                marketplaceItemSelected === "" ?
                <>
                    <div className="marketplaceNew__header">
                        <p>Create New Listing</p>
                        <div 
                            className="marketplaceNew__header--button"
                            onClick={() => dispatch(changeSidebar("marketplace"))}
                        >
                            <CloseIcon 
                                style={{
                                    height: "3vh",
                                    width: "3vw",
                                    color: "white",
                                }}
                            />
                        </div>
                    </div>
                    <div className="marketplaceNew__tabs">
                        <div className="marketplaceNew__tabsTop">
                            <Tab 
                                component={<LocalOfferIcon />} 
                                name="Choose Listing Type"   
                                active
                                clickHandler={() => {}}
                            />
                        </div>
                        <div className="marketplaceNew__tabsBottom">
                            <Tab 
                                component={<LoyaltyIcon />} 
                                name="Your Listings"   
                                active={false}
                                clickHandler={() => {}}
                            />
                            <Tab 
                                component={<HelpIcon />} 
                                name="Seller Help"   
                                active={false}
                                clickHandler={() => {}}
                            />
                        </div>
                    </div>
                </>
                :<MarketplaceAdd 
                    form={form} 
                    changeHandler={changeHandler}
                    submitHandler={submitHandler}
                />
            }
            

        </div>
    )
}

export default MarketplaceNew
