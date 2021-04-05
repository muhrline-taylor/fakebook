import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import sidebarReducer from '../features/sidebarSlice';
import groupsSidebarReducer from "../features/groupsSidebarSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    sidebar: sidebarReducer,
    groupsSidebar: groupsSidebarReducer,
  },
});
