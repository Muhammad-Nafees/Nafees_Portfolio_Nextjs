import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Must be a valid email"
    )
    .matches(/^[^\s]+$/, "Email cannot contain spaces"),
  message: Yup.string().required("Message is required"),
});
