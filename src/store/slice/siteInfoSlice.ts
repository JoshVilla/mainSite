import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISiteInfo } from "../../components/header/interface";

// Initial state typing
interface ISiteInfoState {
  siteInfo: ISiteInfo | null; // Can be null if no user info is available
}

// Define the initial state
const initialState: ISiteInfoState = {
  siteInfo: null, // No user initially
};

// Create the slice
const siteInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // Action to set user information
    getSiteInfo: (state, action: PayloadAction<ISiteInfo | null>) => {
      state.siteInfo = action.payload; // Payload contains the user object directly
    },
  },
});

// Export actions and reducer
export const { getSiteInfo } = siteInfoSlice.actions;
export default siteInfoSlice.reducer;
