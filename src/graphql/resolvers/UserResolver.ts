import "reflect-metadata";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  InputType,
  Field,
} from "type-graphql";
import { User } from "../types/User";
import { Context } from "./context";
import { ChatCreateInput } from "./ChatResolver";

@InputType()
class UserCreateInput {
  @Field()
  username!: string;

  @Field({ nullable: true })
  password!: string;

  @Field((_type) => [ChatCreateInput], { nullable: true })
  Chats!: [ChatCreateInput];
}

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async allUsers(@Ctx() ctx: Context) {
    return ctx.prisma.user.findMany();
  }

  @Mutation((_returns) => User)
  async signupUser(
    @Arg("data") data: UserCreateInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return ctx.prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });
  }
}
