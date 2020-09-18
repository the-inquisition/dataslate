import { isPropertySignature } from "typescript";
import {
  UserContextProps,
  GET_USERCONTEXT,
  SET_USERCONTEXT,
  GetUserContext,
  SetUserContext,
} from "./types";

export function getUserContext(props: UserContextProps): GetUserContext {
  return {
    type: GET_USERCONTEXT,
    payload: { username: props.username },
  };
}

export function setUserContext(value: string): SetUserContext {
  return {
    type: SET_USERCONTEXT,
    payload: {
      username: value,
    },
  };
}
