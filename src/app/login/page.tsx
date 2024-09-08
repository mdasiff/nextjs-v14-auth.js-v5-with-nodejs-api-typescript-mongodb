import { signIn } from '../../lib/auth';
import { AuthError } from "next-auth"
// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex justify-center items-start md:items-center p-8">
//           <form
//             action={async () => {
//               'use server';
//               await signIn('github', {
//                 redirectTo: '/dashboard'
//               });
//             }}
//             className="w-full"
//           >
//             <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">Sign in with GitHub</button>
//           </form>
//     </div>
//   );
// }

import Link from 'next/link';
import { Form } from '../Form';
import { SubmitButton } from '../submit-button';

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <Form
          action={async (formData: FormData) => {
            'use server';
            
            try{
            await signIn('credentials', {
              // redirect: false,
              email: formData.get('email') as string,
              password: formData.get('password') as string,
              redirectTo: '/dashboard'
            });
          } catch (error) {
            if(error instanceof AuthError) {
              
              switch (error.type) {
                case "CredentialsSignin":
                  return { error: "Invalid Credentials" }
                default:
                  return { error: "Something went wronng" }
              }
            }
            throw error;
          }
          
          }}
        >
          <SubmitButton type="submit">Sign in</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {' for free.'}
          </p>
        </Form>
      </div>
    </div>
  );
}

