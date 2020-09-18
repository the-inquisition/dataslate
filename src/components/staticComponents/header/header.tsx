import React, { FunctionComponent } from "react";
import { Row, Col, Frame, Button } from "components/ui";
import classes from "./styles/header.module.scss";
import { Provider } from "services";
import { persistor } from "store";

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

  async function logOut() {
    await persistor.purge().then(() => {
      return persistor.flush();
    });
  }

  return (
    // <div {...rest}>
    <Frame animate {...rest}>
      <Row>
        <Col {...gridLayout}></Col>
        <Col {...gridLayout}>
          <img
            onClick={() => {
              Provider.Campaign.getCampaign("peppe", "Test Campaign");
            }}
            className={classes.image}
            src="https://i.imgur.com/vmaxsd1.png"
          ></img>
        </Col>
        <Col {...gridLayout}>
          <Button animate layer="alert" onClick={() => logOut()}>
            Purge
          </Button>
        </Col>
      </Row>
    </Frame>
    // </div>
  );
};

export { Header };
