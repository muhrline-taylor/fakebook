import React from 'react';
import "../static/css/MarketplaceNewMainLanding.css";
import BuildIcon from '@material-ui/icons/Build';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useDispatch, useSelector } from 'react-redux';
import { selectMarketplaceItem, changeMarketplaceItem } from '../features/marketplaceItemSlice';

const MarketplaceNewMainLanding = () => {
    const dispatch = useDispatch();
    const marketplaceItemSelected = useSelector(selectMarketplaceItem);


    return (
        <div className="marketplaceNewMainLanding">
            <div className="marketplaceNewMainLanding__header">
                <p>Choose Listing Type</p>
            </div>
            <div className="marketplaceNewMainLanding__cards">
                <div className="marketplaceNewMainLanding__card"
                    onClick={() => dispatch(changeMarketplaceItem("item"))}
                >
                    <div className="marketplaceNewMainLanding__cardMain">
                        <BuildIcon 
                            style={{
                                height: "50px",
                                width: "50px",
                            }}
                        />
                        <p style={{
                            fontWeight: "500"
                        }}>Item for Sale</p>
                        <p style={{
                            fontSize: "13px"
                        }}>Create a single listing for one or more items to sell</p>
                    </div>
                    
                </div>
                <div className="marketplaceNewMainLanding__card">
                    <div className="marketplaceNewMainLanding__cardMain">
                        <DirectionsCarIcon  
                            style={{
                                height: "50px",
                                width: "50px",
                            }}
                        />
                        <p style={{
                            fontWeight: "500"
                        }}>Vehicle for Sale</p>
                        <p style={{
                            fontSize: "13px"
                        }}>Sell a car, truck or other type of vehicle</p>
                    </div>
                </div>
                <div className="marketplaceNewMainLanding__card">
                    <div className="marketplaceNewMainLanding__cardMain">
                        <HomeWorkIcon
                            style={{
                                height: "50px",
                                width: "50px",
                            }}
                        />
                        <p style={{
                            fontWeight: "500"
                        }}>Home for Sale or Rent</p>
                        <p style={{
                            fontSize: "13px"
                        }}>List a house or apartment for sale or rent</p>
                    </div>
                </div>
                <div className="marketplaceNewMainLanding__card">
                    <div className="marketplaceNewMainLanding__cardMain">
                        <PostAddIcon
                            style={{
                                height: "50px",
                                width: "50px",
                            }}
                        />
                        <p style={{
                            fontWeight: "500"
                        }}>Job Opening</p>
                        <p style={{
                            fontSize: "13px"
                        }}>Post a job on our public job board</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketplaceNewMainLanding
