import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventsSidebar: "",
};

const eventsSidebarSlice = createSlice({
    name: "eventsSidebar",
    initialState,
    reducers: {
        changeEventsSidebar: (state, action) => {
            state.eventsSidebar = action.payload
        },
    },
});

export const { changeEventsSidebar } = eventsSidebarSlice.actions;

export const selectEventsSidebar = state => state.eventsSidebar.eventsSidebar;

export default eventsSidebarSlice.reducer;