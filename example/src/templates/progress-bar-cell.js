import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  progressBarCell: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    borderBottom: `1px solid ${theme.palette.text.lightDivider}`
  },
  progressBar: {
    backgroundColor: theme.palette.primary[300],
    float: 'left',
    height: theme.spacing.unit
  }
});

export const ProgressBarCellBase = ({ value, classes, style }) => {
  const percent = value * 100;
  return (
    <TableCell className={classes.progressBarCell} style={style}>
      <div
        className={classes.progressBar}
        style={{ width: `${percent}%` }}
        title={`${percent.toFixed(1)}%`}
      />
    </TableCell>
  );
};
ProgressBarCellBase.propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object
};
ProgressBarCellBase.defaultProps = {
  style: {}
};

export const ProgressBarCell = withStyles(styles, { name: 'ProgressBarCell' })(ProgressBarCellBase);
