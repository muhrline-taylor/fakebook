import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    watchSidebar: "",
};

const watchSidebarSlice = createSlice({
    name: "watchSidebar",
    initialState,
    reducers: {
        changeWatchSidebar: (state, action) => {
            state.watchSidebar = action.payload
        },
    },
});

export const { changeWatchSidebar } = watchSidebarSlice.actions;

export const selectWatchSidebar = state => state.watchSidebar.watchSidebar;

export default watchSidebarSlice.reducer;