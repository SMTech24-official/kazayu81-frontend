import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      //   redirect user to the home page after signing in
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

// Correct the handler spelling and export both GET and POST handlers
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
