const graphql = require('graphql');
const { User, Application, JobPosting } = require('../models');
const ApplicationStateType = require('../enums/ApplicationStateEnum');
const types = require('../types/types');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = graphql;
const GraphQLDate = require('graphql-date');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addApplication: {
            type: types.Application,
            args: {
                date: { type: new GraphQLNonNull(GraphQLDate) },
                jobTitle: { type: new GraphQLNonNull(GraphQLString) },
                company: { type: new GraphQLNonNull(GraphQLString) },
                url: { type: GraphQLString },
                status: { type: new GraphQLNonNull(ApplicationStateType) },
                userId: { type: new GraphQLNonNull(GraphQLString) },
                comments: { type: GraphQLString }
            },
            resolve(parent, args) {
                let application = new Application({
                    date: args.date,
                    jobTitle: args.jobTitle,
                    company: args.company,
                    url: args.url,
                    status: args.status,
                    userId: args.userId,
                    comments: args.comments
                });
                return application.save();
            }
        },
        addUser: {
            type: types.User,
            args: {
                externalId: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let user = new User({
                    externalId: args.externalId,
                    firstName: args.firstName,
                    lastName: args.lastName
                });
                return user.save();
            }
        },
        addJobPosting: {
            type: types.JobPosting,
            args: {
                postingDate: { type: new GraphQLNonNull(GraphQLDate) },
                jobTitle: { type: new GraphQLNonNull(GraphQLString) },
                company: { type: new GraphQLNonNull(GraphQLString) },
                url: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let jobPosting = new JobPosting({
                    postingDate: args.postingDate,
                    jobTitle: args.postingDate,
                    company: args.company,
                    url: args.url
                })
                return jobPosting.save();
            }
        }
    }
});
module.exports = { Mutation }
