import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Words, Image } from "components/ui";
import { useDataContent } from "controllers";
import classes from "./styles/dataContent.module.scss";

const DataContent: FunctionComponent = ({}) => {
  const { game, username, dataIndentifier } = useParams();
  const { data } = useDataContent(username, dataIndentifier);
  return (
    <Fragment>
      <Row>
        <Col>
          Game param: <Words layer='success'> {game}</Words>
        </Col>
        <Col>
          user: <Words layer='success'>{username}</Words>
        </Col>
        <Col>
          Data identifier: <Words layer='success'>{dataIndentifier}</Words>
        </Col>
        <Col>
          <Image className={classes.image} animate resources='/images/rosette.jpg'></Image>
        </Col>
      </Row>
      <Row>
        <Words animate layer='success'>
          {data && data.title}
        </Words>
      </Row>
      <Row>
        <Words animate>{data && data.text}</Words>
      </Row>
    </Fragment>
  );
};

export { DataContent };
