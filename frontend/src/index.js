import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import { concat, ApolloLink } from "apollo-link";
import { RestLink } from "apollo-link-rest";
import { withClientState } from "apollo-link-state";
import { HttpLink } from "apollo-link-http";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { typeDefs } from "./schema";

const cache = new InMemoryCache();

const defaults = {
  // Dog: () => false
};

const resolvers = {
  Dog: {
    isLiked: () => false
  }
};

const stateLink = withClientState({
  cache,
  resolvers,
  defaults,
  typeDefs
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: "http://localhost:4000" })
  ]),
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
