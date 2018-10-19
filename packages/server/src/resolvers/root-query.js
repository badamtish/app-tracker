const graphql = require('graphql');
const User = require('../models/user');
const Application = require('../models/application');
const JobPosting = require('../models/job-posting');
const types = require('../types/types');
const ApplicationStateType = require('../enums/ApplicationStateEnum');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        application: {
            type: types.Application,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Application.findById(args.id);
            }
        },
        user: {
            type: types.User,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        applications: {
            type: new GraphQLList(types.Application),
            args: {
                userId: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return Application.find({
                    userId: args.userId
                }).sort({
                    date: 'descending'
                });
            }
        },
        applicationFilter: {
            type: new GraphQLList(types.Application),
            args: {
                userId: {
                    type: GraphQLID
                },
                filter: {
                    type: ApplicationStateType
                }
            },
            resolve(parent, args) {
                if (args.filter !== null) {
                    return Application.find({
                        userId: args.userId
                    }).where('status').equals(args.filter).sort('descending');
                } else {
                    return Application.find({
                        userId: args.userId
                    }).sort('descending');
                }
            }
        },
        jobPostings: {
            type: new GraphQLList(types.JobPosting),
            args: {},
            resolve(parent, args) {
                return JobPosting.find({});
            }
        }
    }
});

module.exports = { RootQuery }

