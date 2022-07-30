import NextAuth from "next-auth";

// Providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
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
        //TODO: 'Adaptar este modulo a los requerimientos del proyecto'
        //return dbusers.checkUserEmailPassword(credentials!.email, credentials!.passowrd)
        return {
          name: "Pepito",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },
  session: {
    strategy: "jwt",
    maxAge: 86400,
    updateAge: 17280,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Verify credentials
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "oauth":
            //TODO: verificar si existe en DB, sino, crearlo
            const _user = { name: "Pepito" };
            token.user = _user;
            break;
          case "credentials":
            token.user = user;
            break;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET!,
});
