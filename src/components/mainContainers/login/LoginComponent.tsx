import React, { FunctionComponent, useState, useContext } from "react";
import classes from "./styles/login.module.scss";
import { store } from "store";
import { setUserContext } from "store/user";
type Props = {};

const LoginComponent: FunctionComponent<Props> = ({}) => {
  const [name, setName] = useState("");
  function onLogin(val: string) {
    store.dispatch(setUserContext(val));
  }

  return (
    <form>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        className={classes.input}
      />
      <input
        type="button"
        value="Submit"
        className={classes.submit}
        onClick={() => onLogin(name)}
      />
    </form>
  );
};

export { LoginComponent };
