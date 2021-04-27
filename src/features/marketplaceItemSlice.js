import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    marketplaceItem: "",
};

const marketplaceItemSlice = createSlice({
    name: "marketplaceItem",
    initialState,
    reducers: {
        changeMarketplaceItem: (state, action) => {
            state.marketplaceItem = action.payload
        },
    },
});

export const { changeMarketplaceItem } = marketplaceItemSlice.actions;

export const selectMarketplaceItem = state => state.marketplaceItem.marketplaceItem;

export default marketplaceItemSlice.reducer;