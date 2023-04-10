"use client";
import React,{useState} from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import { loginValidator } from "@/app/utils/validator";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import {auth} from './../firebase'
// import Swal from 'sweetalert2'
function Login(props) {
  const [isLoading, setisLoading] = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
    },
    validationSchema: loginValidator(),
    onSubmit:async (values) => {
      // console.log(values);
      setisLoading(true)

    await   signInWithEmailAndPassword (auth, values.email, values.pwd)
      .then((userCredential) => {
          const user = userCredential.user;
          router.push("/")
          console.log(user);

      })
      .catch((error) => {
        setisLoading(false)
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:error.code || 'Authentication fail',
            showCancelButton:true,
            showConfirmButton:false
          })
      });
      setisLoading(false)
      formik.handleReset();
    },
  });

  return (
    <div className={styles.page}>
      <div className={`pt-30 pb-50 ${styles.form_wrapper}`}>
        <p className={styles.para1}>Account Login </p>

        <Form className={styles.form} onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className={`${styles.form_input}`}
              type="email"
              placeholder="Enter email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.errorMsg}>{formik.errors.email}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              className={`${styles.form_input}`}
              type="password"
              placeholder="Password"
              name="pwd"
              value={formik.values.pwd}
              onChange={formik.handleChange}
            />
            {formik.touched.pwd && formik.errors.pwd && (
              <p className={styles.errorMsg}>{formik.errors.pwd}</p>
            )}
          </Form.Group>

          <button disabled={isLoading} type="submit" className={styles.btn}>
            {/* login */}
            {isLoading? 'Authenticating....': 'Login'}
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
