import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import sidebarReducer from '../features/sidebarSlice';
import groupsSidebarReducer from "../features/groupsSidebarSlice";
import marketplaceSidebarReducer from "../features/marketplaceSidebarSlice"
import watchSidebarReducer from '../features/watchSidebarSlice';
import eventsSidebarReducer from "../features/eventsSidebarSlice";
import memoriesSidebarReducer from "../features/memoriesSidebarSlice";
import savedSidebarReducer from "../features/savedSidebarSlice";
import pagesSidebarReducer from "../features/pagesSidebarSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    sidebar: sidebarReducer,
    groupsSidebar: groupsSidebarReducer,
    marketplaceSidebar: marketplaceSidebarReducer,
    watchSidebar: watchSidebarReducer,
    eventsSidebar: eventsSidebarReducer,
    memoriesSidebar: memoriesSidebarReducer,
    savedSidebar: savedSidebarReducer,
    pagesSidebar: pagesSidebarReducer,
  },
});
