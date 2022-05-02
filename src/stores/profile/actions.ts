import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { AppThunk } from "..";

let client_id: string | Blob = process.env.REACT_APP_CLIENT_ID!;
let client_secret: string = process.env.REACT_APP_CLIENT_SECRET!;
let redirect_uri: string = process.env.REACT_APP_REDIRECT_URI!;

export const getAccessToken =
  (arg: any): AppThunk =>
  async (dispatch, getState) => {
    const data = new FormData();
    data.append("client_id", client_id);
    data.append("client_secret", client_secret);
    data.append("code", arg.code);
    data.append("redirect_uri", redirect_uri);
    fetch(
      `https://cors-everywhere-mujhtech.herokuapp.com/https://github.com/login/oauth/access_token`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((paramsString) => {
        let params = new URLSearchParams(paramsString);
        let access_token = params.get("access_token");
        let profile = getState().profile;
        //console.log(profile);
        if (access_token && profile.data == null) {
          return dispatch(fetchProfile({ access_token: access_token }));
        }
        return dispatch(profileError({ error: "Something went wrong" }));
      })

      .catch((error) => {
        dispatch(profileError({ error: error }));
      });
  };

export const fetchProfile = createAsyncThunk(
  "profile/updateProfile",
  async (arg: any) => {
    const response = await fetch(`https://api.github.com/user`, {
      headers: {
        Authorization: `token ${arg.access_token}`,
      },
    });
    return response.json();
  }
);

export const profileError = createAction<any>("profile/updateError");
