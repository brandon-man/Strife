import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { Chat } from "./Chat";

@ObjectType()
export class User {
  @Field((_type) => ID)
  id!: number;

  @Field((_type) => String, { nullable: true })
  username?: string | null;

  @Field((_type) => String, { nullable: true })
  password?: string | null;

  @Field((_type) => [Chat], { nullable: true })
  messages?: [Chat] | null;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
