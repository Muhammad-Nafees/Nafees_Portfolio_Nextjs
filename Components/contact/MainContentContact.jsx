import { contactForm } from "@/validation/validation";
import CustomInput from "../reusable_components/CustomInput";
import { Formik } from "formik";


const MainContentContact = () => {

  const initialValues={
     name:"",
     email:"",
     textArea:""
  }

  return (
    <>
    <Formik
      initialValues={initialValues}
       validationSchema={contactForm}
     >
      <div className="pt-20 flex flex-col justify-center items-center">
        <p className="text-gray-500 text-sm py-2">Get In Touch</p>
        <h1 className="text-white font-bold text-4xl">Contact Me</h1>
      </div>

      <div className="py-12">
        <CustomInput placeHolder={"Name"} />
        <CustomInput placeHolder={"Email"} />

        <div className="w-5/12 border border-gray-500 py-2 rounded-lg m-auto my-4">
          <textarea
            placeholder={"Type Your Message"}
            className="pl-3 h-32 bg-transparent border-none outline-none w-11/12 resize-none"
          />
        </div>

         <button type="submit" className="px-8 py-3 bg-nafeesOne flex justify-center items-center m-auto rounded-lg">
             <p className="text-black font-semibold">Send</p>
         </button>

      </div>
    </Formik>

    </>
  );
};

export default MainContentContact;
