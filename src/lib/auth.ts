import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from './auth.config';
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // providers: [GitHub],
  ...authConfig,
  providers: [
    Credentials({
      async authorize({ email, password }: any) {

        const apiUrl = `${process.env.NODE_API}/api/admin/auth`;

        // return {name: "Md Asif", email: "mdasiff007@gmail.com"}

        try {
          // Call the backend API for authentication
          const response = await axios.post(apiUrl, {
            email,
            password
          });

          // Check if authentication is successful
          if (response.status === 200 && response.data.token) {
            // Extract user information and JWT token from the response
            const user = {
              email: email, // Use the email from the credentials or response if available
              token: response.data.token, // Use the token provided by your backend
            };
            
            // Return the user object containing the JWT token
            return user;
          }
          
          
        } catch (error) {
          console.error("Authorization error:", error);
          return null; // Return null in case of an error to indicate failure
        }
      },
    }),
  ],
})