import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userList: [],
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        currentUser: (state, action) => {
            state.userList = action.payload;
        },
    }
})

export const { currentUser } = userSlice.actions;

export const selectUserList = state => state.users.userList;

export default userSlice.reducer;