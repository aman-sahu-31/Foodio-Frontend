import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ram",
  role: "Restaurant Owner",
  profilePic: "https://i.pravatar.cc/100?img=12",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.profilePic = action.payload.profilePic;
    },
    logoutUser: (state) => {
      state.name = "";
      state.role = "";
      state.profilePic = "";
    },
  },
});

// ✅ Named exports (important!)
export const { setUser, logoutUser } = userSlice.actions;

// ✅ Default export (for store)
export default userSlice.reducer;
