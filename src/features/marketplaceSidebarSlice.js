import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    marketplaceSidebar: "",
};

const marketplaceSidebarSlice = createSlice({
    name: "marketplaceSidebar",
    initialState,
    reducers: {
        changeMarketplaceSidebar: (state, action) => {
            state.marketplaceSidebar = action.payload
        },
    },
});

export const { changeMarketplaceSidebar } = marketplaceSidebarSlice.actions;

export const selectMarketplaceSidebar = state => state.marketplaceSidebar.marketplaceSidebar;

export default marketplaceSidebarSlice.reducer;