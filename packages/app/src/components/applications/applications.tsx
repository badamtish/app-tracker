import React from 'react';
import { Query } from 'react-apollo';
import { UserApplicationQuery } from '../../utils/schemas/queries/queries';
import * as QueryProps from '../../utils/schemas/types/query-types';
import { AddApplication } from '../add-application/add-application';
import ApplicationList from './application-list';
import Callback from '../callback/spinner';
interface Props {
    userId: string;
}

export default class Applications extends React.Component<Props> {
    render() {
        return (
            <div>
                <AddApplication userId={this.props.userId} />
                <Query<QueryProps.Applications, QueryProps.Variables> query={UserApplicationQuery} variables={{ userId: this.props.userId }}>
                    {({ loading, data, error }) => {
                        if (loading) {
                            return <Callback />;
                        } else if (data) {
                            return (<ApplicationList applications={data} />);
                        } else {
                            return null;
                        }
                    }}
                </Query>
            </div>
        );
    }
}
