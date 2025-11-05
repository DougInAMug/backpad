import prisma from "$lib/prisma";
import type { Actions } from "./$types";

export const actions = {
  addInit: async ({ request }) => {
    const data = await request.formData();
    const initContent = data.get("initContent");
    if (typeof initContent != "string") {
      return;
    }
    await prisma.init.create({
      data: {
        content: initContent,
      },
    });
  },
} satisfies Actions;
