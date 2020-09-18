import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import cx from "classnames";

export default function Link(props) {
  const { theme, classes, className, children, to, ...etc } = props;
  const cls = cx(classes.root, className);
  return (
    <RouterLink className={cls} {...etc} to={to}>
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  theme: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
};
