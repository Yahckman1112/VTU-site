import React from "react";
import img from "../../../public/images/phone.png";
import styles from "./banner.module.scss";
import { Image } from "next/image";
import Link from "next/link";

function HomeBanner(props) {
  return (
    <div className={styles.banner}>
    <div className={`row`}>

      <div className={`col-12 col-lg-6 col-md-6 ${styles.side1}`}> 
      <p className={styles.para1}>
            <span className={styles.para1_text}>Proffesional & </span>
            <span className={styles.para1_text}> Personal</span>
            <span className={styles.para1_text}>Data Plug</span>
          </p>
          <p className={styles.para2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi
            cupiditate! Exercitationem consequatur accusantium ullam perferendis
          </p>{" "}
          <br />
          <div className={styles._btn}>

          <Link href="#" className={styles.register_btn}>
            Register Now
          </Link>
          </div></div>
      <div className="col-12 col-lg-6 col-md-6">
      <div className={styles.back}></div>
      </div>
    </div>
    </div>
  );
}

export default HomeBanner;
