import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import EditIcon from '@material-ui/icons/Edit';
import * as QueryProps from '../../utils/schemas/types/query-types';

interface Props {
    applications: QueryProps.Applications;
}

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    background: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
});

export default withStyles(styles)(class ApplicationList extends React.Component<WithStyles<typeof styles> & Props> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root} style={{ margin: 'auto' }}>
                <Grid container={true} spacing={16} alignContent="center">
                    <Grid item={true} xs={12} md={12} lg={12}>
                        <Typography variant="title" className={classes.title}>
                            Current Applications
                        </Typography>
                        <div className={classes.background}>
                            <List dense={false}>
                                {
                                    this.props.applications.applications.length > 0 ?
                                        this.props.applications.applications.map(application => (
                                            <ListItem key={application.id} button={true} component="a" href={application.url} target="_blank">
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <FolderIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={application.jobTitle}
                                                    secondary={application.company}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton aria-label="Delete">
                                                        <EditIcon />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )) :
                                        <div>No current applications.</div>
                                }
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
);