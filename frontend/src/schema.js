export const typeDefs = `
  type Dog {
    isLiked: Boolean
  }


  type Query {
    dogs: [Dog]
  }
`;
