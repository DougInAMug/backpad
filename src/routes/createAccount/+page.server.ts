import { auth } from "$lib/auth";
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

    const validatingEmail = v.safeParse(
      v.pipe(
        v.string(),
        v.nonEmpty("Please enter your email."),
        v.email("The email is badly formatted."),
        v.minLength(5, "Your email must have 5 characters or more.")
      ),
      rawEmail
    );
    const validatingName = v.safeParse(
      v.pipe(
        v.string(),
        v.nonEmpty("Please enter your user name."),
        v.minLength(3, "Your user name must have 3 characters or more.")
      ),
      rawName
    );
    const validatingPassword = v.safeParse(
      v.pipe(
        v.string(),
        v.nonEmpty("Please enter your password."),
        v.minLength(8, "Your password must have 8 characters or more.")
      ),
      rawPassword
    );

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
