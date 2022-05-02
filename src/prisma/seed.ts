import { PrismaClient } from "@prisma/client";
import { users } from "./data/users";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  await prisma.user.createMany({
    data: users,
  });
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
