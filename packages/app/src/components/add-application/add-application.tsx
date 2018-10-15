import React from 'react';
import { ApplicationForm } from './add-application-form';
import { ChildMutateProps, graphql } from 'react-apollo';
import { AddApplicationMutationVariables, AddApplicationMutationType } from '../../utils/schemas/types/mutate-types';
import { AddApplicationMutation, UserApplicationQuery } from '../../utils/schemas/queries/queries';
import { Grid, Typography } from '@material-ui/core';

interface Props {
    userId: string;
}

class C extends React.Component<ChildMutateProps<Props, AddApplicationMutationType, AddApplicationMutationVariables>> {
    submit = async (values: AddApplicationMutationVariables) => {
        const response = await this.props.mutate({
            variables: {
                jobTitle: values.jobTitle,
                company: values.company,
                date: values.date,
                url: values.url,
                userId: this.props.userId,
                status: values.status,
                comments: values.comments
            },
            refetchQueries: [{
                query: UserApplicationQuery,
                variables: {
                    userId: this.props.userId
                }
            }]
        });
        console.log('response: ', response);
        return null;
    }

    render() {
        return (
            <div style={{ margin: 'auto', flexGrow: 1, maxWidth: 752, paddingTop: '25px' }}>
                <Typography variant="title" style={{ marginBottom: '20px' }}>
                    Add Application
                </Typography>
                <Grid container={true} spacing={16} alignContent="center" >
                    <ApplicationForm submit={(values) => this.submit(values)} />
                </Grid>
            </div>
        );
    }
}

export const AddApplication = graphql<Props, AddApplicationMutationType, AddApplicationMutationVariables>(AddApplicationMutation)(C);