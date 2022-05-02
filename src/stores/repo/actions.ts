import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRepo = createAsyncThunk(
  "repo/updateRepo",
  async (arg: any) => {
    const response = await fetch(
      `https://api.github.com/users/${arg.username}/repos?per_page=50`
    );
    return response.json();
  }
);
