import { Prisma } from "@prisma/client";

const userData: Prisma.UserCreateInput[] = [
  {
    username: "lucy",
    password: "lucy_pw",
    messages: "hi, what're you up to?",
  },
];

export default userData;
