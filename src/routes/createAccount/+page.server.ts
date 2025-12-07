import { auth } from "$lib/auth";
import { V_Email, V_Name, V_Password } from "$lib/valibotSchemata";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import * as v from "valibot";

export const actions = {
  createAccount: async ({ request }) => {
    const rawFormData = await request.formData();

    const rawEmail = rawFormData.get("email");
    const rawName = rawFormData.get("name");
    const rawPassword = rawFormData.get("password");

    let parsedEmail;
    let parsedName;
    let parsedPassword;

    const validatingEmail = v.safeParse(V_Email, rawEmail);
    const validatingName = v.safeParse(V_Name, rawName);
    const validatingPassword = v.safeParse(V_Password, rawPassword);

    if (
      validatingEmail.success &&
      validatingName.success &&
      validatingPassword.success
    ) {
      parsedEmail = validatingEmail.output;
      parsedName = validatingName.output;
      parsedPassword = validatingPassword.output;
    } else {
      return fail(400, {
        rawEmail,
        rawName,
        createAccountError_email: validatingEmail.issues?.[0].message,
        createAccountError_name: validatingName.issues?.[0].message,
        createAccountError_password: validatingPassword.issues?.[0].message,
      });
    }

    try {
      await auth.api.signUpEmail({
        body: {
          name: parsedName,
          email: parsedEmail,
          password: parsedPassword,
        },
      });
    } catch {
      return fail(400, {
        rawEmail,
        rawName,
        createAccountError_auth: "unexpected authentication error",
      });
    }
    redirect(302, "/profile");
  },
} satisfies Actions;
