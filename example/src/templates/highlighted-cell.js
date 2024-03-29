import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const getColor = amount => {
  if (amount < 3000) {
    return '#F44336';
  }
  if (amount < 5000) {
    return '#FFC107';
  }
  if (amount < 8000) {
    return '#FF5722';
  }
  return '#009688';
};

const styles = theme => ({
  highlightedCell: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    borderBottom: `1px solid ${theme.palette.text.lightDivider}`
  }
});

const HighlightedCellBase = ({ tableColumn, value, classes, style }) => (
  <TableCell
    className={classes.highlightedCell}
    style={{
      color: getColor(value),
      textAlign: tableColumn.align,
      ...style
    }}
  >
    ${value}
  </TableCell>
);

HighlightedCellBase.propTypes = {
  value: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  style: PropTypes.object,
  tableColumn: PropTypes.object
};
HighlightedCellBase.defaultProps = {
  style: {},
  tableColumn: {}
};

export const HighlightedCell = withStyles(styles, { name: 'HighlightedCell' })(HighlightedCellBase);
