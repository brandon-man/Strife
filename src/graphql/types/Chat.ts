import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Chat {
  @Field(() => ID)
  id!: number;

  @Field(() => User, { nullable: true })
  receiver?: User | null;

  @Field(() => User, { nullable: true })
  sender?: User | null;

  @Field(() => String, { nullable: true })
  message!: string | null;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
