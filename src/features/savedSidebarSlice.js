import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedSidebar: "",
};

const savedSidebarSlice = createSlice({
    name: "savedSidebar",
    initialState,
    reducers: {
        changeSavedSidebar: (state, action) => {
            state.savedSidebar = action.payload
        },
    },
});

export const { changeSavedSidebar } = savedSidebarSlice.actions;

export const selectSavedSidebar = state => state.savedSidebar.savedSidebar;

export default savedSidebarSlice.reducer;