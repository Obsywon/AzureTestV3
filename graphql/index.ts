import { ApolloServer } from 'apollo-server-azure-functions';
import { typeDefs } from './schema';
// Resolver map.
const resolvers = {
  Query: {
    user: (_, params) => {
      return {
        id: params.id,
        firstName: 'John',
        lastName: 'Smith',
        age: 50
      }
    },
  },
};
// Create our server.
const server = new ApolloServer({ typeDefs, resolvers });
export const run = server.createHandler();