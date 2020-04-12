import {ApolloServer, gql} from "apollo-server-express";

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const books = [
  {
    title: 'Harry Potter and the Sorcerer\'s stone',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const schema = gql`
  type Query {
    books: [Book],
  }
  type Book {
    title: String,
    author: String,
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
  console.log(`server on http://localhost:4000${server.graphqlPath}`);
});

