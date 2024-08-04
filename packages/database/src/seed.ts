import { log, error as logError } from "@repo/logger";
import { faker } from "@faker-js/faker";
import { type User } from "@prisma/client";
import { prisma } from "./client";

const DEFAULT_USERS = faker.helpers.multiple(createRandomUser, { count: 10 });

function createRandomUser(): Pick<User, "name" | "email" | "emailVerified"> {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    emailVerified: new Date(),
  };
}

void (async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map(async (user) => {
        await prisma.user.upsert({
          where: {
            email: user.email,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        });
      }),
    );
    log("Seeded default users");
  } catch (error) {
    logError(error);
    process.exit(1);
  }
})();
