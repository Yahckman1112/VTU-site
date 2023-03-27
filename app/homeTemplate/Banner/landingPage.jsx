import React from "react";
import img from "../../../public/images/phone.png";
import styles from "./banner.module.scss";
import Image from "next/image";
import Link from "next/link";
import myImage from "./../../images/phone.png";
function HomeBanner(props) {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12">
            <div className={styles.side1}>
            <p className={styles.para1}>Welcome to DataWheel  </p>

            <p className={styles.para2}>Best Place to get virtual <em className={styles.em}>TopUp!</em> </p>


              <Link href='/' className={styles.btn_reg}> Register Now</Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-12">
            <div className={styles.img}>
              <Image src={myImage} width="0px" height="0px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
