import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOGS = gql`
  query dogs {
    dogs {
      id
      name
      isLiked @client
    }
  }
`;

const Dogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (error) return <h1>{JSON.stringify(error)}</h1>;
      console.log(data, "is data");
      if (loading) return <h1>Loading...</h1>;
      return data.dogs.map(doga => <h1 key={doga.id}>{doga.name}</h1>);
    }}
  </Query>
);

export default Dogs;
