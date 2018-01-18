import React from 'react';
import injectSheet, {withTheme} from 'react-jss'

import styles from './styles';

const Button = ({ classes, children }) => {
  return (
    <button className={classes.button}>
      <span className={classes.label}>
        {children}
      </span>
    </button>
  )
}

export default withTheme(injectSheet(styles)(Button))
