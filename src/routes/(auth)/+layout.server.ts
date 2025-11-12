import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/auth";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ request }) => {
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session) {
    throw redirect(302, "/login");
  }
  return {
    user: session.user,
  };
};

// https://awingender.com/blog/better-auth-svelte-5-authentication/#5-connect-it-with-sveltekit