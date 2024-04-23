"use client";
import { contactFormSchema } from "@/validation/validation";
import CustomInput from "../reusable_components/CustomInput";
import { Formik } from "formik";

const MainContentContact = () => {
  const initialValues = {
    name: "",
    email: "",
    textArea: "",
  };

  const handleSubmitFunc = async (values) => {
    console.log("valuesName", values);
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
              <h1 className="text-white font-bold text-4xl">Contact Me</h1>
            </div>

            <div className="py-12">
              <form onSubmit={handleSubmit}>
                 
                <CustomInput
                  placeHolder={"Name"}
                  value={values.name}
                  error={errors.name}
                  onChangeInputValue={handleChange("name")}
                  onBlur={handleBlur}
                  touched={touched.name}
                />
                <CustomInput
                  placeHolder={"Email"}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChangeInputValue={handleChange("email")}
                  onBlur={handleBlur}
                />

                <div className="w-5/12 m-auto">
                  <div className="border border-gray-500 py-2 rounded-lg">
                    <textarea
                      value={values.textArea}
                      onChange={handleChange("textArea")}
                      onBlur={handleBlur}
                      placeholder={"Type Your Message"}
                      className="pl-3 h-32 bg-transparent border-none outline-none w-11/12 resize-none"
                    />
                  </div>

                  {errors.textArea && touched.textArea && (
                    <p className="text-red-600">{errors.textArea}</p>
                  )}
                </div>
              </form>

              <button
                onClick={handleSubmit}
                type="submit"
                className="px-8 py-3 bg-nafeesOne flex justify-center items-center m-auto rounded-lg"
              >
                <p className="text-black font-semibold">Send</p>
              </button>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default MainContentContact;
