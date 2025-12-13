import { auth } from "$lib/auth";
import { V_Email, V_Password } from "$lib/valibotSchemata";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import * as v from "valibot";

export const actions = {
  logIn: async ({ request }) => {
    await new Promise((fulfil) =>
      setTimeout(fulfil, Math.random() * 500 + 250)
    );

    const rawFormData = await request.formData();

    const rawEmail = rawFormData.get("email");
    const rawPassword = rawFormData.get("password");

    let parsedEmail;
    let parsedPassword;

    const validatingEmail = v.safeParse(V_Email, rawEmail);
    const validatingPassword = v.safeParse(V_Password, rawPassword);

    if (validatingEmail.success && validatingPassword.success) {
      parsedEmail = validatingEmail.output;
      parsedPassword = validatingPassword.output;
    } else {
      return fail(400, {
        rawEmail,
        logInError_email: validatingEmail.issues?.[0].message,
        logInError_password: validatingPassword.issues?.[0].message,
      });
    }

    try {
      await auth.api.signInEmail({
        body: {
          email: parsedEmail,
          password: parsedPassword,
        },
      });
    } catch {
      return fail(400, {
        rawEmail,
        logInError_auth: "Matching account not found.",
      });
    }
    redirect(302, "/profile");
  },
} satisfies Actions;
