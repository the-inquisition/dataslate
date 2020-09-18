import { PURGE } from "redux-persist";
export interface UserContextProps {
  username: string;
}

export interface UserContextState {
  props: UserContextProps;
}

export const GET_USERCONTEXT = "GET_USERCONTEXT";
export const SET_USERCONTEXT = "SET_USERCONTEXT";

export interface GetUserContext {
  type: typeof GET_USERCONTEXT;
  payload: UserContextProps;
}

export interface SetUserContext {
  type: typeof SET_USERCONTEXT;
  payload: UserContextProps;
}

export interface Purge {
  type: typeof PURGE;
  payloa: UserContextProps;
}

export type UserContextActionTypes = GetUserContext | SetUserContext | Purge;
