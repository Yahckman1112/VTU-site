import * as Yup from "yup";

 export const mailValidator = () => {
    return Yup.object({
      name: (Yup.string().required("Please tell us your name")),
      email: (Yup.string().required("Enter your mail")),
      message: (Yup.string().required("Enter your message")),
    });
  };
  
  
  export const registerValidator = () => {
     return Yup.object({
       firstName: (Yup.string().required("Please tell us your name")),
       lastName: (Yup.string().required("Please tell us your name")),
       email: (Yup.string().required("Enter your mail")),
       phoneNumber: (Yup.string().required("Enter your mail")),
       pwd: (Yup.string().required("Enter your message")),
     });
   };

//    firstName lastName email phone number pwd