const { GraphQLSchema } = require('graphql');
const { RootQuery, Mutation } = require('../resolvers');

module.exports = new GraphQLSchema({
    query: RootQuery.RootQuery,
    mutation: Mutation.Mutation
});