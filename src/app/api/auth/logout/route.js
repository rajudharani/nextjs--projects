import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST() {
  // Clear the session cookie
  cookies().delete("session");
  
  // Redirect to home page
  redirect("/");
}
