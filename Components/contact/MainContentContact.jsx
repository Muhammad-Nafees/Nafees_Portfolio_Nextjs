"use client";

// imports libraries
import React, { useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { Formik } from "formik";
import { MdError } from "react-icons/md";
// form schema
import { contactFormSchema } from "../../validation/validation";
import emailjs from "@emailjs/browser";
// imports components
import CustomInput from "../reusable_components/CustomInput";
import FixHeight from "../shared-components/Fixheight";
import CustomButton from "../reusable_components/CustomButton";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../app/constant";

const MainContentContact = () => {
  const initialValues = {
    username: "",
    email: "",
    message: "",
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleSubmitFunc = async (values, actions) => {
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        values,
        PUBLIC_KEY
      );
      actions.resetForm();
      toast.success("Thanks For your message,i will get back to you soon.");
      console.log("🚀 ~ emailjs.send ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ emailjs.send ~ error:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmitFunc}
      >
        {({
          errors,
          values,
          handleChange,
          touched,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <div className="pt-20 flex flex-col justify-center items-center">
              <p className="text-gray-500 text-sm py-2">Get In Touch</p>
              <h1 className="text-blackMain font-bold text-4xl">Contact Me</h1>
            </div>

            <div className="pt-12">
              <form onSubmit={handleSubmit}>
                <CustomInput
                  placeHolder={"username"}
                  value={values.username}
                  error={errors.username}
                  onChangeInputValue={handleChange("username")}
                  onBlur={handleBlur}
                  id={"username"}
                  touched={touched.username}
                />

                <CustomInput
                  placeHolder={"Email"}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  id={"email"}
                  onChangeInputValue={handleChange("email")}
                  onBlur={handleBlur}
                />

                <div className="w-9/12 sm:w-6/12 m-auto">
                  <div className="border border-gray-500 py-2 rounded-lg">
                    <textarea
                      placeholder={"Type Your Message"}
                      value={values.message}
                      onChange={handleChange("message")}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      id={"message"}
                      className="pl-3 h-32 bg-transparent border-none outline-none w-11/12 resize-none"
                    />
                  </div>

                  {errors.message &&
                    ((touched.message && !values.message) ||
                      (errors.message && values.message) ||
                      isFocused) ? (
                    <div className="py-2 flex items-center">
                      <MdError size={21} color="red" />
                      <p className="text-red-600 text-sm px-1">
                        {errors.message}
                      </p>
                    </div>
                  ) : (
                    <FixHeight />
                  )}
                </div>
              </form>
              <div className="pt-6">
                <CustomButton
                  onSubmitAction={handleSubmit}
                  type="submit"
                  text="Send"
                  extraStyle="hover:bg-black hover:text-white border text-black border-black w-28 text-sm sm:text-base sm:w-36 h-12 text-center justify-center items-center flex m-auto py-2 px-4 rounded-full transition duration-200 ease-in"
                />
              </div>

              <div className="py-2 pt-20">
                <p className="text-center px-5 text-sm sm:text-base font-normal">
                  Copyright © 2024 Muhammad Nafees Ahmed. All Rights Reserved.
                </p>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default MainContentContact;
