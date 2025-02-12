import { NextAuthConfig } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/shared/lib/db";
import { privateConfig } from "@/shared/config/private";

export const nextAuthConfig: NextAuthConfig = {
  adapter: PrismaAdapter(dbClient),
  providers: [
    EmailProvider({
      server: {
        host: privateConfig.EMAIL_SERVER_HOST,
        port: privateConfig.EMAIL_SERVER_PORT,
        auth: {
          user: privateConfig.EMAIL_SERVER_USER,
          pass: privateConfig.EMAIL_SERVER_PASSWORD,
        },
        from: privateConfig.EMAIL_FROM,
      },
    }),
    GithubProvider,
  ],
};
