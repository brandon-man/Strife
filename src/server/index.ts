import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express = require("express");
import { buildSchema, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
  @Query(() => String, { name: "helloWorld" })
  async hello() {
    return "Hello World";
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}/graphql`);
  });
};

main();
