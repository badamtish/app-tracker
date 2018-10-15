import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: any) => ({
  progress: {
    margin: 'auto',
    display: 'block'
  },
});

interface Props {

}

export default withStyles(styles)(class Spinner extends React.Component<WithStyles<typeof styles> & Props> {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ display: 'flex', margin: 'auto', height: '100vh' }}>
        <CircularProgress className={classes.progress} size={50} />
      </div>
    );
  }
}
);