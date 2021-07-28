import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      friends: [String]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '1sgaggarko,',
      name: () => 'Kaio',
      age: () => 55,
      friends: () => ['Anna'],
    },
  },
});

server.listen(4008).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
