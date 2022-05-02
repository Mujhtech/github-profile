import { createReducer } from "@reduxjs/toolkit";
import { fetchProfile } from "./actions";

export type ProfileState = {
  data: any;
  status: boolean;
  error: boolean;
};

const initialState: ProfileState = {
  data: null,
  status: false,
  error: false,
};

export const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProfile.pending, (state) => {
      state.status = true;
    })
    .addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.status = false;
      state.data = payload;
    })
    .addCase(fetchProfile.rejected, (state) => {
      state.status = false;
      state.error = true;
    });
});

export default profileReducer;
