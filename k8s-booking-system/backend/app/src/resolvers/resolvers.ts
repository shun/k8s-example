const Resolvers = {
  Query: {
    user: async (_: any, args: any) => {
      console.log(args)
      const id = args.id;
      const userRepository = getRepository(User);
      return await userRepository.findOne({ where: {id: id}});
    },
    users: async () => {
      return await getRepository(User).find();
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      console.log(args)
      const userRepository = getRepository(User);
      return await userRepository.save({ firstname: args.firstname, lastname: args.lastname});
    }
  }
};
