import React, { useEffect } from "react";
import ErrorPage from "./components/ErrorPage";
import GithubProfile from "./components/GithubProfile";
import Loading from "./components/Loading";
import Login from "./components/Login";
import { useAppDispatch, useAppSelector } from "./stores/hook";
import { getAccessToken } from "./stores/profile";

function App() {
  const { data, status, error } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    if (data == null && hasCode) {
      const newUrl = url.split("?code=");
      //console.log(newUrl[1]);
      dispatch(getAccessToken({ code: newUrl[1] }));
    }
  });

  return (
    <>
      {!status && data == null && <Login />}
      {status && data == null && <Loading />}
      {!status && data != null && <GithubProfile />}
      {error && !status && data == null && <ErrorPage />}
    </>
  );
}

export default App;
