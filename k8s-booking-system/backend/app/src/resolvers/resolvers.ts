import {GraphQLDate, GraphQLDateTime, GraphQLTime} from "graphql-iso-date";
import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {Bookinginfo} from "../entity/Bookinginfo";

export const Resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Query: {
    user_by_id: async (_: any, args: any) => {
      const id = args.id;
      const userRepository = getRepository(User);
      return await userRepository.findOne({ where: {id: id}});
    },
    users_by_ids: async (_: any, args: any) => {
      return await getRepository(User).find();
    },
    bookinginfo_by_user_id: async(_: any, args: any) => {
      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ relations: ["bookinginfolist"], where: {id: args.user_id}});
      return user;
    },
    bookinginfo_by_id: async(_: any, args: any) => {
      const bookingRepository = getRepository(Bookinginfo);
      const bookinginfo = await bookingRepository.findOne({ relations: ["user"], where: {id: args.id}});
      return bookinginfo;
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const userRepository = getRepository(User);
      return await userRepository.save({ firstname: args.firstname, lastname: args.lastname});
    }
  }
};
