import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: "",
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        changeSidebar: (state, action) => {
            state.sidebar = action.payload;
        },
    },
});

export const { changeSidebar } = sidebarSlice.actions;

export const selectSidebar = state => state.sidebar.sidebar;

export default sidebarSlice.reducer;