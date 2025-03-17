import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Required for security
  pages: {
    signIn: "/auth", // Redirects users to your custom AuthPage
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
