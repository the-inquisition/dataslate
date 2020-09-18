import React, { FunctionComponent } from "react";
import classes from "./styles/leftnavigation.module.scss";
import { Frame, Row, Col, Link, withSounds } from "arwes";
import { FutureLink } from "components/ui";
import { useSideBarLinks } from "controllers";

type PropTypes = {
  [key: string]: any;
};

const LeftNavigation: FunctionComponent<PropTypes> = ({ ...rest }) => {
  const { data, loading } = useSideBarLinks();

  const SoundLink = withSounds()((props) => (
    <FutureLink onClick={props.sounds.typing.play()} {...props}></FutureLink>
  ));

  const renderLinks = () => {
    return data.map((link: any, index: number) => {
      return (
        <Row key={index}>
          <FutureLink to={link.path}>{link.text}</FutureLink>
          {/* <SoundLink to={link.path}>{link.text}</SoundLink> */}
        </Row>
      );
    });
  };

  return (
    <Frame {...rest} className={classes.leftNav} animate level={1} corners={0}>
      {renderLinks()}
    </Frame>
  );
};

export { LeftNavigation };
