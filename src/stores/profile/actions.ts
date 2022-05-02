import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk(
  "profile/updateProfile",
  async (arg: any) => {
    const response = await fetch(
      `https://api.github.com/users/${arg.username}`
    );
    return response.json();
  }
);
