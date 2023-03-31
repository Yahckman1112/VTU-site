"use client";
import React from "react";
import styles from "./footer.module.scss";
import Form from "react-bootstrap/Form";
function ContactForm(props) {
  return (
    <div className={styles.form}>
      <p className={styles.para1}> Contact us</p>
      <p className={styles.para2}>
        Say <span className={styles.span}>Hello</span>{" "}
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>

        <button type="submit" className={styles.contact_btn}>
          Send Message
        </button>
      </Form>
    </div>
  );
}

export default ContactForm;
