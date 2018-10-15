import { ApplicationState } from '../../models/applicationstate.const';

export type AddApplicationMutationVariables = {
    date: Date;
    jobTitle: string;
    company: string;
    url: string;
    status: ApplicationState;
    userId: string;
    comments?: string;
};

export type ApplicationMutation_addApplication = {
    path: string;
    message: string;
};

export type AddApplicationMutationType = {
    addApplication: ApplicationMutation_addApplication[] | null;
};
