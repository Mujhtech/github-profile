import { createReducer } from "@reduxjs/toolkit";
import { fetchRepo } from "./actions";

export type RepoState = {
  datas: any;
  status: boolean;
  error: boolean;
};

const initialState: RepoState = {
  datas: null,
  status: false,
  error: false,
};

export const repoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRepo.pending, (state) => {
      state.status = true;
    })
    .addCase(fetchRepo.fulfilled, (state, { payload }) => {
      state.status = false;
      state.datas = payload;
    })
    .addCase(fetchRepo.rejected, (state) => {
      state.status = false;
      state.error = true;
    });
});

export default repoReducer;
