import React from "react";
import img from "../../../public/images/phone.png";
import styles from "./banner.module.scss";
import { Image } from "next/image";
import Link from "next/link";

function HomeBanner(props) {
  return (
    <div className={styles.banner}>
      <h1>Banner</h1>
    </div>
  );
}

export default HomeBanner;
