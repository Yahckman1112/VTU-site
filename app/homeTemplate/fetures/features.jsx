import React from "react";
import styles from "./features.module.scss";
import { BiLogIn } from "react-icons/bi";

function Features(props) {
  const cardDatas = [
    {
      logo: <BiLogIn className={styles.real_logo} size={20} />,
      title: "E-wallet System",
      text: ` Your e-wallet is the safest, earliest and fastest means of
      carrying out transaction with us. Your funds are secure with your
      e-wallet and can be kept for you as long as you.`,
    },
    {
      logo: <BiLogIn className={styles.real_logo} size={20} className={styles.real_logo} />,
      title: "Reliable and Secure",
      text: `We have a fully reliable and dependent platform You get 100% value for any transaction you carry with us .`,
    },
    {
      logo: <BiLogIn className={styles.real_logo} size={20} />,
      title: "Automated servive",
      text: `Our service delivery and wallet funding is automated. Your purchase are automated and get delivered to you at the blink of an eye`,
    },
    {
      logo: <BiLogIn className={styles.real_logo} size={20} />,
      title: "Customer Support",
      text: `Our customers are premium to us, hence satisfying them is our top most priority. our customers service is availabe 24/7t.`,
    },
  ];
  return (
    <div className={styles.body}>
      <div className={styles.para}>
        <p className={styles.para_1}>Features</p>
        <p className={styles.para_2}>
          Some Amazing <span className={styles.span}>Fetures</span>{" "}
        </p>
      </div>

      <div className="row">
        {cardDatas.map((item) => (
          <div className="col-12 col-lg-3 col-mg-3">
            <div className={styles.card}>
              <p className={styles.logo}>{item.logo}</p>
              <p className={styles.para1}>{item.title}</p>
              <p className={styles.para2}>{item.text}</p>
            </div>
          </div>
        ))}
        {/* <div className="col-12 col-lg-3 col-mg-3">2</div>
        <div className="col-12 col-lg-3 col-mg-3">3</div>
        <div className="col-12 col-lg-3 col-mg-3">4</div> */}
      </div>
    </div>
  );
}

export default Features;
