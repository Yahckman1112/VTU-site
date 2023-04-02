"use client";
import React from "react";
import styles from "./footer.module.scss";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
function ContactForm(props) {
  const mailValidator = () => {
    return Yup.object({
      name: (Yup.string().required("Enter ur name")),
      email: (Yup.string().required("Enter ur mail")),
      message: (Yup.string().required("Enter ur message")),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: mailValidator(),
    onSubmit: (values) => {

      console.log(values);
    },
  });

  // console.log(formik.values);
  return (
    <div className={styles.form} id="contact">
      <p className={styles.para1}> Contact us</p>
      <p className={styles.para2}>
        Say <span className={styles.span}>Hello</span>{" "}
      </p>
      <Form onSubmit={formik.handleSubmit} >

        <div></div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
            {formik.touched.name && formik.errors.name && (
                  <p className={styles.errorMsg}>{formik.errors.name}</p>
                )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Your email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
  {formik.touched.email && formik.errors.email && (
                  <p className={styles.errorMsg}>{formik.errors.email}</p>
                )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
            {formik.touched.message && formik.errors.message && (
                  <p className={styles.errorMsg}>{formik.errors.message}</p>
                )}
        </Form.Group>

        <button type="submit" className={styles.contact_btn}>
          Send Message
        </button>
      </Form>
    </div>
  );
}

export default ContactForm;
