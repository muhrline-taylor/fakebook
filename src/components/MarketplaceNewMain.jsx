import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMarketplaceItem, selectMarketplaceItem } from '../features/marketplaceItemSlice';
import "../static/css/MarketplaceNewMain.css";
import MarketplaceNewMainLanding from './MarketplaceNewMainLanding';

const MarketplaceNewMain = () => {
    const dispatch = useDispatch();
    const marketplaceItemSelected = useSelector(selectMarketplaceItem);

    useEffect(() => {
        dispatch(changeMarketplaceItem(""))
    },[])

    return (
        <div className="marketplaceNewMain">
            {
                marketplaceItemSelected === "" ?
                <MarketplaceNewMainLanding />
                :""
            }
        </div>
    )
}

export default MarketplaceNewMain
