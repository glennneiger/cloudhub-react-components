import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import { lightGreen } from 'material-ui/colors';

const lgreen = lightGreen[500];

const styles = {
  root: {
    width: '100%',
    marginTop: 30,
  },
  lgreen: {
    backgroundColor: lgreen,
    color: lgreen,
  },
};

function Progress(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <LinearProgress classes={{ primaryColor: classes.lgreen }} />
    </div>
  );
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);
