import NextAuth from "next-auth";

// Providers
import Credentials from "next-auth/providers/credentials";

// Auth - Back
import { loginAuth } from "../../../auth";

export default NextAuth({
  providers: [
    Credentials({
      name: "Custom Login",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "Type your e-mail...",
          autoComplete: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Type your password...",
          autoComplete: true,
        },
      },
      async authorize(credentials) {
        return await loginAuth(credentials!.email, credentials!.password);
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        token.accessToken = user.access_token; // USER contiene los datos que devuelve - await authorize() -

        if (account) {
          switch (account.type) {
            case "credentials":
              token.user = user;
              break;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET!,
});
