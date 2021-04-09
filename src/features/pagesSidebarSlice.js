import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pagesSidebar: "",
};

const pagesSidebarSlice = createSlice({
    name: "pagesSidebar",
    initialState,
    reducers: {
        changePagesSidebar: (state, action) => {
            state.pagesSidebar = action.payload
        },
    },
});

export const { changePagesSidebar } = pagesSidebarSlice.actions;

export const selectPagesSidebar = state => state.pagesSidebar.pagesSidebar;

export default pagesSidebarSlice.reducer;