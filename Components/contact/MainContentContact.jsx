"use client";
import { contactFormSchema } from "../../validation/validation";
import CustomButton from "../reusable_components/CustomButton";
import CustomInput from "../reusable_components/CustomInput";
import { Formik } from "formik";

const MainContentContact = () => {



  const initialValues = {
    username: "",
    email: "",
    password: "",
    role: "",
  };

  const handleSubmitFunc = async (values) => {
      console.log("🚀 ~ handleSubmitFunc ~ values:", values);
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
          console.log("🚀 ~ MainContentContact ~ values:", values),
          <>
            <div className="pt-20 flex flex-col justify-center items-center">
              <p className="text-gray-500 text-sm py-2">Get In Touch</p>
              <h1 className="text-blackMain font-bold text-4xl">Contact Me</h1>
            </div>
            <div className="py-12">
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

                <CustomInput
                  placeHolder={"password"}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  id={"password"}
                  onChangeInputValue={handleChange("password")}
                  onBlur={handleBlur}
                />

                <div className="w-5/12 m-auto">
                  <div className="border border-gray-500 py-2 rounded-lg">
                    <textarea
                      placeholder={"Type Your Message"}
                      value={values.role}
                      onChange={handleChange("role")}
                      onBlur={handleBlur}
                      id={"role"}
                      className="pl-3 h-32 bg-transparent border-none outline-none w-11/12 resize-none"
                    />
                  </div>

                  {errors.role && touched.role && (
                    <p className="text-red-600">{errors.role}</p>
                  )}
                </div>
              </form>
              {/* className="px-8 py-3 bg-nafeesOne flex justify-center items-center m-auto rounded-lg" */}
              <div className="pt-6">
                <CustomButton
                  onSubmitAction={handleSubmit}
                  type={"submit"}
                  text={"Send"}
                  extraStyle={
                    "hover:bg-black hover:text-white border text-black border-black w-28 text-sm sm:text-base sm:w-36 h-12 text-center justify-center items-center flex  m-auto py-2 px-4  rounded-full transition duration-200 ease-in "
                  }
                />
              </div>

              {/* <button
                onSubmit={handleSubmit}
                type="submit"
              >
                <p className="text-black font-semibold">Send</p>
              </button> */}
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default MainContentContact;
