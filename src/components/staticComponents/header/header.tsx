import React, { Fragment, FunctionComponent } from "react";
import { Row, Col, Frame } from "components/ui";
import classes from "./styles/header.module.scss";

type PropTypes = {
  [key: string]: any;
};

const Header: FunctionComponent<PropTypes> = ({ ...rest }) => {
  const gridLayout = {
    s: 4,
    m: 4,
    l: 4,
    xl: 4,
  };

  return (
    // <div {...rest}>
    <Frame animate {...rest}>
      <Row>
        <Col {...gridLayout}></Col>
        <Col {...gridLayout}>
          <img className={classes.image} src='https://i.imgur.com/vmaxsd1.png'></img>
        </Col>
        <Col {...gridLayout}></Col>
      </Row>
    </Frame>
    // </div>
  );
};

export { Header };
