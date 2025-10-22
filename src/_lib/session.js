import { cookies } from "next/headers";

// Set session cookie
export const setSession = async (user) => {
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });
};

// Get session cookie
export const getSession = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;

  const user = JSON.parse(session);
  return user;
};

// Delete session cookie
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
