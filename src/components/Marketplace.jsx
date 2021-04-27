import React, { useState, useEffect } from 'react';
import "../static/css/Marketplace.css";
import MarketplaceHeader from './MarketplaceHeader';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MarketplaceCard from './MarketplaceCard';
import axios from 'axios';

const Marketplace = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/saleItems")
            .then(res => setItems(res.data.SaleItems))
    },[])

    useEffect(() => {
        console.log(items)
    })


    return (
        <div className="marketplace">
            <div className="marketplace__header">
                <MarketplaceHeader />
            </div>
            <div className="marketplace__main">
                <div className="marketplace__mainHeader">
                    <h3>Today's Picks for You</h3>
                    <div className="marketplace__mainHeaderR">
                        <LocationOnIcon style={{
                            color: "#1877F2"
                        }}/>
                        <p>St Louis - 40 mi</p>
                    </div>
                </div>
                <div className="marketplace__mainBody">
                    {
                        items ?
                        items.map((item, k) => (
                            <MarketplaceCard 
                                price={item.price}
                                title={item.title}
                                location={item.location}
                                pic={item.photo}
                            />
                        ))
                        :""
                    }
                    {
                        items ?
                        items.map((item, k) => (
                            <MarketplaceCard 
                                price={item.price}
                                title={item.title}
                                location={item.location}
                                pic={item.photo}
                            />
                        ))
                        :""
                    }
                    {
                        items ?
                        items.map((item, k) => (
                            <MarketplaceCard 
                                price={item.price}
                                title={item.title}
                                location={item.location}
                                pic={item.photo}
                            />
                        ))
                        :""
                    }
                </div>
            </div>
        </div>
    )
}

export default Marketplace
