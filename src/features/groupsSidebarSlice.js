import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    groupsSidebar: "",
};

const groupsSidebarSlice = createSlice({
    name: "groupsSidebar",
    initialState,
    reducers: {
        changeGroupsSidebar: (state, action) => {
            state.groupsSidebar = action.payload
        },
    },
});

export const { changeGroupsSidebar } = groupsSidebarSlice.actions;

export const selectGroupsSidebar = state => state.groupsSidebar.groupsSidebar;

export default groupsSidebarSlice.reducer;