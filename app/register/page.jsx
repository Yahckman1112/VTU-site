"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { Fa } from 'react-icons/fa'

import img from "./../images/courses-04.jpg";
function page(props) {
  return (
    <div>
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

          <Form className={styles.form}>
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
                />
              </Form.Group>
              <Form.Group
                className={` ${styles.form_row_2}  mb-3`}
                controlId="formBasicEmail"
              >
                <Form.Control
                  className={styles.form_control}
                  type="text"
                  placeholder="LastName"
                />
              </Form.Group>
            </div>

            <Form.Group className={` mb-3`} controlId="formBasicEmail">
              <Form.Control
                className={styles.form_control}
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className={`   mb-3`} controlId="formBasicEmail">
              <Form.Control
                className={styles.form_control}
                type="number"
                placeholder="Phone Number"
              />
            </Form.Group>

            <Form.Group className={`  mb-3`} controlId="formBasicEmail">
              <Form.Control
                className={styles.form_control}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button className={styles.btn} type="submit">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default page;
