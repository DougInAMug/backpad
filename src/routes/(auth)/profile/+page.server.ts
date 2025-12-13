import prisma from "$lib/prisma";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import * as v from "valibot";

export const actions = {
  EditBackpad: async ({ request }) => {
    		await new Promise((fulfil) => setTimeout(fulfil, 1000));
    const rawFormData = await request.formData();

    const rawId = rawFormData.get("id");
    const rawBackpad = rawFormData.get("localBackpad");

    let parsedId;
    let parsedBackpad;

    const validatingId = v.safeParse(v.string(), rawId);
    const validatingBackpad = v.safeParse(v.string(), rawBackpad);

    if (validatingId.success && validatingBackpad.success) {
      parsedId = validatingId.output;
      parsedBackpad = validatingBackpad.output;
    } else {
      return fail(400, {});
    }

    try {
      await prisma.user.update({
        where: { id: parsedId },
        data: { backpad: parsedBackpad },
      });
    } catch {
      return fail(400, {});
    }
  },
} satisfies Actions;
