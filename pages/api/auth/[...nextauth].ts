import NextAuth from "next-auth";

// Providers
import Credentials from "next-auth/providers/credentials";

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
