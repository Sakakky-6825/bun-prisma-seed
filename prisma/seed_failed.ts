import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const main = async () => {
  const user = await prismaClient.user.create({
    data: {
      name: "test_name",
      email: "test@example.com",
    },
  });

  console.log(`Create User Name: ${user.name}`);
};

try {
  main();
} catch (error) {
  console.error(error);
  prismaClient.$disconnect();
} finally {
  prismaClient.$disconnect();
}
