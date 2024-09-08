import { auth, signOut } from "../../lib/auth"

export default async function Dashboard() {
  const session = await auth()
  if (!session) return <div>Not authenticated</div>
 
  return (
    <div>
        <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}