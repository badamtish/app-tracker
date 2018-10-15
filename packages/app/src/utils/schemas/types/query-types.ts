export type Application = {
    id: string;
    jobTitle: string;
    company: string;
    url: string;
    date: Date;
    status: string;
};

export type Applications = {
    applications: Application[];
};

export type Variables = {
    userId: string
};
