import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlices"; // example slice
import ownerReducer from "../Features/ownerSlices"; // import owner slice
import adminReducer from "../Features/adminSlices"; // import admin slice

export const store = configureStore({
  reducer: {
    user: userReducer,
    owner: ownerReducer, // Add owner slice here
    admin: adminReducer, // Add admin slice here
  },
});

export default store;