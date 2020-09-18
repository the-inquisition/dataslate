import React, { Fragment, FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, DataContent } from "components/mainContainers";
import { Puffs } from "components/ui";
type PropTypes = {
  [key: string]: any;
};

const Routes: FunctionComponent<PropTypes> = ({ ...rest }) => {
  return (
    <Puffs>
      <div {...rest}>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route
            exact
            path='/game/:game/user/:username/dataContent/:dataIndentifier'
            component={DataContent}
          />
          <Route component={() => <div>NO CONTENT</div>} />
        </Switch>
      </div>
    </Puffs>
  );
};

export default Routes;
