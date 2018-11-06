import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOGSQ = gql`
  query dogs {
    dogs @rest(type: "Dog", path: "dogs") {
      id
      name
      liked @client {
        isLiked
      }
    }
  }
`;

const GET_DOGSF = gql`
  query dogs {
    dogs {
      id
      name
    }
  }
`;

const GET_DOGS = gql`
  query dogs {
    dogs {
      id
      name
      liked @client {
        liked {
          isLiked
        }
      }
    }
  }
`;

const Dogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      console.log(data, "is data");
      if (loading) return <h1>Loading...</h1>;
      return data.dogs.map(dog => <h1 key={dog.id}>{dog.name}</h1>);
    }}
  </Query>
);

export default Dogs;
