import {gql} from "apollo-server-express";

export const Schema = gql`
  type Query {
    user(id: Int!): User
    users: [User]
  }


  type Mutation {
    addUser(
      firstname: String!
      lastname: String!
    ): User
  }

  type User {
    id: Int!
    firstname: String!
    lastname: String!
    delflg: Boolean!
  }

`;
