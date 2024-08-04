import { PrismaClient } from "@prisma/client";

interface GlobalThis {
  prisma?: PrismaClient;
}

declare const global: GlobalThis;

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";
