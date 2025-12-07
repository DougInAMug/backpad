import * as v from "valibot";

export const V_Email = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your email."),
  v.email("The email is badly formatted."),
  v.minLength(5, "Your email must have 5 characters or more.")
);

export const V_Name = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your user name."),
  v.minLength(3, "Your user name must have 3 characters or more.")
);

export const V_Password = v.pipe(
  v.string(),
  v.nonEmpty("Please enter your password."),
  v.minLength(8, "Your password must have 8 characters or more.")
);
