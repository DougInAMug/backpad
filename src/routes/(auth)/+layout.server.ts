import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/auth";
import type { LayoutServerLoad } from "./$types";
import prisma from "$lib/prisma";

export const load: LayoutServerLoad = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });

  const allUsers = await prisma.user.findMany();
  const allUsersMinusCurrent = allUsers.filter((i) => i.id != session?.user.id);

  if (!session) {
    throw redirect(302, "/logIn");
  }
  return {
    user: session.user,
    allUsersMinusCurrent,
  };
};

// https://awingender.com/blog/better-auth-svelte-5-authentication/#5-connect-it-with-sveltekit
