import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

try {
  const createUsers = await prismaClient.user.create({
    data: {
      name: "john_doe",
      email: "john_doe@example.com",
    },
  });
  console.log("created users:", createUsers);
} catch (error) {
  console.error("Error during user creation:", error);
} finally {
  await prismaClient.$disconnect();
}
