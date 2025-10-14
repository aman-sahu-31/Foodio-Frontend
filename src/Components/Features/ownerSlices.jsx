import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    name: "Aman Sahu",
    role: "Owner of Restaurant",
    profilePic: "https://i.pravatar.cc/100?img=12",
}
const ownerSlice = createSlice({
  name: "Owner",
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
export const { setUser, logoutUser } = ownerSlice.actions;
export default ownerSlice.reducer;

