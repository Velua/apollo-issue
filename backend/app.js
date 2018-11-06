// import { GraphQLServer } from "graphql-yoga";
const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `

type Dog {
    id: String
    name: String
}

  type Query {
    dogs: [Dog]
  }
`;

const resolvers = {
  Query: {
    dogs: (_, args) => [
      {
        id: 1,
        name: "Hayden"
      },
      {
        id: 2,
        name: "Josh"
      }
    ]
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
