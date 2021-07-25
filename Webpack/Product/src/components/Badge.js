import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Badge} from "@material-ui/core";

const styles = theme => ({
  blue: {
    backgroundColor: theme.palette.badges.blue,
    color: theme.palette.brandColors.pure,
  },
  red: {
    backgroundColor: theme.palette.interactiveColors.pure,
    color: theme.palette.globalColors.neutrals.white,
  },
  yellow: {
    backgroundColor: theme.palette.interactiveColors.pure,
    color: theme.palette.globalColors.neutrals.white,
  },
  green: {
    backgroundColor: theme.palette.interactiveColors.pure,
    color: theme.palette.globalColors.neutrals.white,
  },
  coral: {
    backgroundColor: theme.palette.interactiveColors.pure,
    color: theme.palette.globalColors.neutrals.white,
  },
  darkRed: {
    backgroundColor: theme.palette.interactiveColors.dark,
    color: theme.palette.globalColors.neutrals.white,
  },
  alignBadge: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    height: '100%'
  }
});

function SimpleBadge(props) {
  const color = props.classes[props.color];
  return (
    <div className={props.classes.alignBadge}>
      <Badge
        classes={{ badge: color }}
        badgeContent={props.text}
      >
      </Badge>
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBadge);