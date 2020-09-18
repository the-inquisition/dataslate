import {
  UserContextState,
  GET_USERCONTEXT,
  SET_USERCONTEXT,
  UserContextActionTypes,
} from "./types";
import { PURGE } from "redux-persist";

const initialState: UserContextState = {
  props: { username: "NOT_SIGNED" },
};

export function userContextReducer(
  state = initialState,
  action: UserContextActionTypes
): UserContextState {
  switch (action.type) {
    case GET_USERCONTEXT:
      return {
        props: {
          username: state.props.username,
        },
      };
    case SET_USERCONTEXT:
      return {
        props: {
          username: action.payload.username,
        },
      };
    case PURGE:
      return initialState;
    default:
      return state;
  }
}
