# Objective

Utilise the @client directive offered by Apollo-Link-State to allow [Combining of local and remote data](https://www.apollographql.com/docs/link/links/state.html#directive)

## What's Expected

A query like

    query dogs {
        dogs {
            id
            name
            liked @client {
                isLiked
            }
        }
    }

to return

    [
        {
            id: "1",
            name: "Hayden",
            liked: {
                isLiked: true
            }
        }, etc...
    ]

However instead receiving

    [
        {
            id: "1",
            name: "Hayden",
            liked: {
                isLiked: false
            }
        }, etc...
    ]

## What's not working?

The client side query of "liked" by default returns `isLiked: false` however when queried after initial start should return `isLiked: true`.
the 'liked' query fails to be queried client side despite using the @client directive.

# Environment

A vanilla create-react-app and GraphQL server is offered.

## Backend

Node.JS based server at [http://localhost:4000](http://localhost:4000) a query of

    {
        dogs {
            name
            id
        }
    }

demonstrates the simple data it offers.

## Frontend

Generated via `create-react-app`, the React application knows client side which dogs the user has 'liked' with an Array of ID numbers which correspond to the ID's offered by the GraphQL server.
