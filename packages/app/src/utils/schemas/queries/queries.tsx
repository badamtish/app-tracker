import { gql } from 'apollo-boost';

export const UserApplicationQuery = gql`
       query Applications($userId: ID){
           applications(userId: $userId){
                id,
                jobTitle,
                company,
                date,
                url,
                status
           }
        }
`;

export const AddApplicationMutation = gql`
        mutation AddApplication($date: String!, $jobTitle: String!, $company: String!, $status: ApplicationsStateEnum!, $url: String, $userId: String!, $comments: String){
            addApplication(date:$date, jobTitle:$jobTitle, company:$company, status: $status, url: $url, userId:$userId, comments: $comments){
                jobTitle,
                company,
                date,
                status
            }
        }
`;
