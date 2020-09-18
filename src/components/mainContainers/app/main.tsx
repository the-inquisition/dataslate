import React, { Fragment } from "react";
import Routes from "./routes";
import { Header } from "../../staticComponents/header/header";
import { LeftNavigation } from "../../staticComponents/left-navigation/leftNavigation";
import classes from "./styles/main.module.scss";
import { AppState } from "store";
import { useSelector } from "react-redux";
import { LoginComponent } from "../index";

const Main = () => {
  let currentUser = useSelector((state: any) =>
    state.props ? state.props.username : "NOT_SIGNED"
  );

  return (
    <Fragment>
      {currentUser !== "NOT_SIGNED" ? (
        <div className={classes.gridLayout}>
          <Header className={classes.header} />
          <LeftNavigation className={classes.leftNav} />
          <Routes className={classes.content} />
        </div>
      ) : (
        <LoginComponent />
      )}
    </Fragment>
  );
};

export default Main;
