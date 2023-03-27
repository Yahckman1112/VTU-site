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
          <div className="col-6 col-sm-6">
            <div className={styles.side1}>
            <p className={styles.para1}>Welcome to DataWheel  </p>

            <p className={styles.para2}>Best Place to get virtual <em className={styles.em}>TopUp!</em> </p>


              <Link href='/' className={styles.btn_reg}> Register Now</Link>
            </div>
          </div>
          <div className="col-6 col-sm-6">
            <div className="img">
              <Image src={myImage} width="30px" height="30px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
