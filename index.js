import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
  console.log(`📝 Query your server at ${url}graphql`);
});
