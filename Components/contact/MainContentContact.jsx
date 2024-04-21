"use client"
import { contactForm } from "@/validation/validation";
import CustomInput from "../reusable_components/CustomInput";
import { Formik } from "formik";

const MainContentContact = () => {

  const initialValues = {
    name: "",
    email: "",
    textArea: "",
  };

  const handleSubmit =async(values)=>{
      console.log("valuesName",values);
      console.log("OK");
  }

  return (
    <>
      <Formik initialValues={initialValues}
       validationSchema={contactForm}
       onSubmit={handleSubmit}
       >
        {({ errors, values, handleChange, touched ,handleBlur}) => (
          
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
               />

              <CustomInput
               placeHolder={"Email"}
               value={values.email}
               error={errors.email}
               onChangeInputValue={handleChange("email")}
               onBlur={handleBlur}
               />

              <div className="w-5/12 border border-gray-500 py-2 rounded-lg m-auto my-4">
                <textarea
                  value={values.textArea}
                  onChange={handleChange("textArea")}
                  onBlur={handleBlur}
                  placeholder={"Type Your Message"}
                  className="pl-3 h-32 bg-transparent border-none outline-none w-11/12 resize-none"
                  />
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
