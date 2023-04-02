"use client";
import React, { useState } from "react";
import styles from "./service.module.scss";
import img1 from "./../../images/courses-01.jpg";
import img2 from "./../../images/courses-02.jpg";
import img3 from "./../../images/courses-03.jpg";
import img4 from "./../../images/courses-04.jpg";

// import Image from next/image;
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Service(props) {
  const [active, setActive] = useState([0]);

  const buttons = [
    { label: "Airtime Topup" },
    { label: "Data Subscription" },
    { label: "Web development " },
    { label: "Utility Bill" },
  ];

  const values = [
    {
      img: img2,
      paraTop: "Airtime Topup",
      paraBody: `      Datawheel provides a quick and convenient way to add credit to
        your mobile phone account. With just a few clicks or taps, you
        can recharge your airtime and stay connected with your
        friends, family, and business associates. Whether you're on
        the go or at home, airtime top-up allows you to keep your
        phone topped up and ready to use, so you never have to worry
        about running out of credit. It's a hassle-free way to stay
        connected and keep your communication channels open`,
    },
    {
      img: img4,
      paraTop: "Data Subscription",
      paraBody: `We offer convenience and flexibility on data subscription,
       as users can easily purchase and manage their data subscription online,
        and access it from anywhere with an internet connection.
        `,
    },

    {
      img: img2,
      paraTop: "Web Development",
      paraBody: `Own a Virtul topUp website to digitalize your buisness. We also develop non VTU websites at affordable rate`,
    },
    {
      img: img1,
      paraTop: "Util Bills ",
      paraBody: `One advantage of using data wheel is that we 
      help in  lowering your utility bills by reducing our prices  
      and this will have more disposable income to spend on other 
      essential services.
        This can help you maintain a reliable communication network while 
        also managing your expenses effectively. In this way, reducing your 
        utility bills can ultimately lead to a more balanced and sustainable
         financial situation.`,
    },
  ];

  const [isChange, setIsChange] = useState(false);

  return (
    <div className={styles.service} id="service" >
      <p className={styles.para1}>Our Service</p>
      <p className={styles.para2}>
        {" "}
        <span className={styles.span}>Service </span> we provide{" "}
      </p>

      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-4 col-md-12">
            <aside className="styles.icon">
              {buttons.map((item, index) => (
                <button
                  className={styles.btn_serv}
                  style={{
                    border: active == index && " 3px solid rgba(219,138,222,1)",
                    color: active == index && "#dc8cdb ",
                    boxShadow:
                      active == index && "0px 0px 15px rgba(0, 0, 0, 0.05)",
                  }}
                  onClick={() => setActive(index)}
                >
                  {item.label}
                </button>
              ))}
            </aside>
          </div>

          <div className="col-12 col-lg-8 col-md-12">
            <div
              className={styles.side2}
              onChange={() => console.log("checking")}
            >
              <div className={styles.side2_img}>
                <Image
                  src={values[active].img}
                  className={styles.image}
                  width="10px"
                  height="10px"
                />
              </div>
              <div className={styles.side2_text}>
                <p className={styles.text_paraTop}>{values[active].paraTop}</p>
                <p className={styles.text_paraBody}>
                  {values[active].paraBody}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
