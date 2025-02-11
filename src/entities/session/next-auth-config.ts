import { NextAuthConfig } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/shared/lib/db";

export const nextAuthConfig: NextAuthConfig = {
  adapter: PrismaAdapter(dbClient),
  providers: [GithubProvider],
};
