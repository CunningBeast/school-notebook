import NextAuth from "next-auth";
import { nextAuthConfig } from "./next-auth-config";

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthConfig);
