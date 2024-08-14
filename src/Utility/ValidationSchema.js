import * as Yup from "yup";

let signupSchema = Yup.object({
  userName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/,  "include a digit")
    .matches(/[a-z]/,  "include a lowercase letter ")
    .matches(/[A-Z]/,  "include a uppercase letter "),
});

let loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
  .required("Please enter a password")
  .min(8, "Password must have at least 8 characters")
  .matches(/[0-9]/,  "include a digit")
  .matches(/[a-z]/,  "include a lowercase letter ")
  .matches(/[A-Z]/,  "include a uppercase letter "),
});

export {loginSchema , signupSchema}
