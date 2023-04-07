"use client";
import React from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import { loginValidator } from "@/app/utils/validator";

function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
    },
    validationSchema: loginValidator(),
    onSubmit: (values) => {
      console.log(values);

      formik.handleReset();
    },
  });

  return (
    <div className={styles.page}>
      <div className={`pt-30 pb-50 ${styles.form_wrapper}`}>
        <p className={styles.para1}>Account Login </p>

        <Form className={styles.form}>
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

          <button type="submit" className={styles.btn}>
            login
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
