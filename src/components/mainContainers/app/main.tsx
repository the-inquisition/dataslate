import React, { Fragment } from "react";
import Routes from "./routes";
import { Header } from "../../staticComponents/header/header";
import { LeftNavigation } from "../../staticComponents/left-navigation/leftNavigation";
import classes from "./styles/main.module.scss";


const Main = () => {
  return (
    <div className={classes.gridLayout}>
      <Header className={classes.header} />
      <LeftNavigation className={classes.leftNav} />
      <Routes className={classes.content} />
    </div>
  );
};

export default Main;
