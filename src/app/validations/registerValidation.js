import * as yup from "yup";

export const RegisterValidation = yup.object().shape({
  name: yup.string("Must be a string").required("Name is required"),

  phone: yup
    .string("Must be a valid phone number")
    .matches(/^\d{10,12}$/, "Enter a valid phone number with 10-12 digits")
    .required("Phone number is required"),

  email: yup
    .string("Must be a string")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Must be a string")
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
