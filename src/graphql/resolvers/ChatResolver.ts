import "reflect-metadata";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  Int,
  InputType,
  Field,
} from "type-graphql";
import { Chat } from "../types/Chat";
import { Context } from "./context";

@InputType()
export class ChatCreateInput {
  @Field()
  message!: string;
}

@InputType()
class ChatOrderByUpdatedAtInput {
  @Field((_type) => SortOrder)
  updatedAt!: SortOrder;
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

@Resolver(Chat)
export class ChatResolver {
  // queries for requesting data/read operations
  @Query(() => Chat, { nullable: true })
  async ChatById(@Arg("id") id: number, @Ctx() ctx: Context) {
    return ctx.prisma.chat.findUnique({
      where: { id },
    });
  }

  @Query(() => [Chat])
  async feed(
    @Arg("skip", (_type) => Int, { nullable: true }) skip: number,
    @Arg("take", (_type) => Int, { nullable: true }) take: number,
    @Arg("orderBy", { nullable: true }) orderBy: ChatOrderByUpdatedAtInput,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.chat.findMany({
      take: take || undefined,
      skip: skip || undefined,
      orderBy: orderBy || undefined,
    });
  }

  // mutatations are for creating, updating or deleting operations
  // @Mutation(() => Chat, { nullable: true })
  // async newChat(@Arg("id", (_type) => Int) id: number, @Ctx() ctx: Context) {
  //   return ctx.prisma.chat.create();
  // }

  @Mutation(() => Chat, { nullable: true })
  async deleteChat(@Arg("id", (_type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.chat.delete({
      where: {
        id,
      },
    });
  }
}
