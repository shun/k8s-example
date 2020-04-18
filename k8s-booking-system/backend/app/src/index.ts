import "reflect-metadata";
import {ApolloServer, gql} from "apollo-server-express";
import {User} from "./entity/User";
import {createConnection, getRepository, Raw, ConnectionOptions, Repository} from "typeorm";
import {DBConfig} from "./database/db.config";
import {Schema} from "./graphql/schema";

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

var conn;
const resolvers = {
  Query: {
    user: async (_: any, args: any) => {
      console.log(args)
      const id = args.id;
      const userRepository = getRepository(User);
      return await userRepository.findOne({ where: {id: id}});
    }
  },
};

async function bootstrap() {
  createConnection(DBConfig);

  const server = new ApolloServer({
    typeDefs: Schema,
    resolvers,
    playground: true,
  });

  //const connection = await createConnection();

  server.applyMiddleware({app});

  app.listen({port: 4000}, () => {
    console.log(`server on http://localhost:4000${server.graphqlPath}`);
  });
};

bootstrap();
