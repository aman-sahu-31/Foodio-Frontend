import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    name:"Abhi",        
    role:"Admin of Restaurant",
    profilePic: "https://i.pravatar.cc/100?img=12",
}
const adminSlice = createSlice({
    name: "Admin",
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
})
export const { setUser, logoutUser } = adminSlice.actions;
export default adminSlice.reducer;
