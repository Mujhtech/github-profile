import React, { useEffect } from "react";
import GithubProfile from "./components/GithubProfile";
import Loading from "./components/Loading";
import Login from "./components/Login";
import { useAppDispatch, useAppSelector } from "./stores/hook";
import { fetchProfile } from "./stores/profile";

function App() {
  const { data, status } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data == null) {
      dispatch(fetchProfile({ username: "Mujhtech" }));
    }
  });

  return (
    <>
      {!status && data == null ? (
        <Login />
      ) : (
        <>{data != null ? <GithubProfile /> : <Loading />}</>
      )}
    </>
  );
}

export default App;
