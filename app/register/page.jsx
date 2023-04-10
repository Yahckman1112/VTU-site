"use client";
import React,{useState} from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { registerValidator } from "@/app/utils/validator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import {auth} from './../firebase'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'

import img from "./../images/courses-04.jpg";
function page(props) {
  const [isLoading, setisLoading] = useState(false)
  const router = useRouter();


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      pwd: "",
    },
    validationSchema: registerValidator(),
    onSubmit: async (values) => {
      // console.log(values);

      setisLoading(true)

      await createUserWithEmailAndPassword(auth, values.email,values.pwd)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log(user);
        router.push('/')
      })
      .catch((error) => {
        setisLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:error.code || 'Authentication failed',
          showCancelButton:true,
          showConfirmButton:false
        })
        
    });
    setisLoading(false)
      formik.handleReset();
    },
  });

  // console.log(formik.initialValues);
  return (
    <div>
      {/* {isLoading && 'loding' } */}
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.image_holder}>
            <Image
              className={styles.img}
              src={img}
              alt="pix"
              width={"0px"}
              height={400}
            />
          </div>

          <Form className={styles.form} onSubmit={formik.handleSubmit}>
            <p className={styles.para1}> Resgister </p>

            <div className={styles.form_row}>
              <Form.Group
                className={` ${styles.form_row_1}  mb-3`}
                controlId="formBasicEmail"
              >
                <Form.Control
                  className={styles.form_control}
                  type="text"
                  placeholder="firstname"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className={styles.errorMsg}>{formik.errors.firstName}</p>
                )}
              </Form.Group>
              <Form.Group
                className={` ${styles.form_row_2}  mb-3`}
                controlId="formBasicEmail"
              >
                <Form.Control
                  className={styles.form_control}
                  type="text"
                  placeholder="LastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className={styles.errorMsg}>{formik.errors.lastName}</p>
                )}
              </Form.Group>
            </div>

            <Form.Group className={` mb-3`} controlId="formBasicEmail">
              <Form.Control
                className={styles.form_control}
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={styles.errorMsg}>{formik.errors.email}</p>
              )}
            </Form.Group>
            <Form.Group className={`   mb-3`} controlId="formBasicEmail">
              <Form.Control
                className={styles.form_control}
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className={styles.errorMsg}>{formik.errors.phoneNumber}</p>
              )}
            </Form.Group>

            <Form.Group className={`  mb-3`} controlId="formBasicEmail">
              <Form.Control
                className={styles.form_control}
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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button disabled={isLoading} className={styles.btn} type="submit">
              {/* Submit */}
              {isLoading? 'Saving Data....' : 'Register' }
            </button>
            <p> Already have an account <span> <Link href='/login'>Sign in</Link> </span> </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default page;
