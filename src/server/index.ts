import "reflect-metadata";
import * as tq from "type-graphql";
import {
  ChatCreateInput,
  ChatResolver,
  SortOrder,
} from "../graphql/resolvers/ChatResolver";
import { UserResolver } from "../graphql/resolvers/UserResolver";
import { ApolloServer } from "apollo-server";
import { DateTimeResolver } from "graphql-scalars";
import { context } from "../graphql/resolvers/context";
import { GraphQLScalarType } from "graphql";

const app = async () => {
  tq.registerEnumType(SortOrder, {
    name: "SortOrder",
  });

  const schema = await tq.buildSchema({
    resolvers: [ChatResolver, UserResolver, ChatCreateInput],
    scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }],
  });

  new ApolloServer({ schema, context: context }).listen({ port: 4000 }, () =>
    console.log(`
🚀 Server ready at: http://localhost:4000`)
  );
};

app();
