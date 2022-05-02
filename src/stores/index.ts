import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { profileReducer } from "./profile";
import { repoReducer } from "./repo";

const combinedReducer = combineReducers({
  profile: profileReducer,
  repo: repoReducer,
});

const reducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });

type store = ReturnType<typeof makeStore>;

export type AppDispatch = store["dispatch"];
export type RootState = ReturnType<store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
