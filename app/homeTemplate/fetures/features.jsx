import React from "react";
import styles from "./features.module.scss";
import { FaWallet, FaLock } from "react-icons/fa";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdAirplanemodeActive} from 'react-icons/md'


function Features(props) {
  const featuresData = [
    {
      logo: <FaWallet size={50} className={styles.logo} />,
      title: "E-wallet",
      text: `Your e-wallet is the safest, earliest and fastest means of carrying out transaction with us. Your funds are secure with your e-wallet and can be kept for you as long as you.`,
    },
    {
      logo: <FaLock size={50} className={styles.logo} />,
      title: "Reliable and Secure",
      text: "We have a fully reliable and dependent platform You get 100% value for any transaction you carry with us .",
    },
    {
    //   logo: <  size={50} className={styles.logo} />,
    logo:< MdAirplanemodeActive size={50} className={styles.logo} /> ,
      title: "automated Service",
      text: "Our service delivery and wallet funding is automated. Your purchase are automated and get delivered to you at the blink of an eye",
    },
    {
      logo: <  BsFillTelephoneFill size={50} className={styles.logo} />,
      title: "Customer Support",
      text: "Our customers are premium to us, hence satisfying them is our top most priority. our customers service is availabe 24/7t.",
    },
  ];
  return (
    <div className={styles.body}>
      <div className={styles.para}>
        <div className={styles.para1}>
          <p className={styles.para1_main}>FeaTures</p>
          <p className={styles.para1_sub}>Some Amaizing Features of the App</p>
        </div>
        <div className={styles.para2}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum
          necessitatibus voluptatibus magni ipsam et inventore tempora sit
          dignissimos quos deleniti, vel cupiditate quisquam ducimus in odit,
          quasi exercitationem eos excepturi. Unde animi dolores accusamus
          corporis quia quo aspernatur laborum?{" "}
        </div>
      </div>

      <div className="row">
        {featuresData.map((item) => (
          <div className="col-12 col-lg-3 col-md-6">
            <div className={styles.feature}>
              {item.logo}
              <p className={styles.logo_title}>{item.title} </p>
              <p className={styles.logo_text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
