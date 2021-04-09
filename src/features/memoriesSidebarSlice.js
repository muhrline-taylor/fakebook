import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    memoriesSidebar: "",
};

const memoriesSidebarSlice = createSlice({
    name: "memoriesSidebar",
    initialState,
    reducers: {
        changeMemoriesSidebar: (state, action) => {
            state.memoriesSidebar = action.payload
        },
    },
});

export const { changeMemoriesSidebar } = memoriesSidebarSlice.actions;

export const selectMemoriesSidebar = state => state.memoriesSidebar.memoriesSidebar;

export default memoriesSidebarSlice.reducer;