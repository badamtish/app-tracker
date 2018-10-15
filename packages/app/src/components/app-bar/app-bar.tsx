import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Auth0Authentication } from '../../utils/auth/auth0-authentication';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

interface Props {
    auth: Auth0Authentication;
}

export default withStyles(styles)(
    class C extends React.Component<WithStyles<typeof styles> & Props> {
        render() {
            const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.grow}>
                                News
                            </Typography>
                            {!this.props.auth.isAuthenticated ?
                                <Button color="inherit" onClick={() => this.props.auth.login()}>Login</Button>
                                : <Button color="inherit" onClick={() => this.props.auth.logout()}>Logout</Button>}
                        </Toolbar>
                    </AppBar>
                </div>
            );

        }
    }
);