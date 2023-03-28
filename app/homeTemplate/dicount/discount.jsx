import React from "react";
import styles from "./discount.module.scss";
import Image from "next/image";
import img from "./../../images/cta-left-image.png";
import Link from "next/link";
function Discount(props) {
  return (
    <div>
      <div className={styles.body}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12">
              <Image src={img} height="1px" width="1px" />
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <p className={styles.para1}>
                Up to 5% Off for your First Transaction
              </p>
              <div className={styles.btn_cont}>
                <Link href="/" className={styles.btn}>
                  Register Now!!!{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what they think */}
      <div className={styles.wheel}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <p className={styles.wheel_para1}>
                {" "}
                Why Easy <span className={styles.span}>DataWheel?</span> {" "}
              </p>
              <p className={styles.wheel_para2}>
                We provide our services base values that continues to grow
                reppidly, offering dipensal of services that span various
                categories including Data subscription, cable sub, electric
                bill, Airtime top up and much more. Our range of services are
                designed to ensure optimum levels of convenience and customer
                satisfaction with the reseller options, other optimum services
                include our Affordable price guarantee, Automated, Reliability,
                dedicated customer service support and many other premium
                services. As we continue to expand the Platform, our scope of
                offerings will increase in variety, simplicity and conveniency,
                join us today and enjoy the increasing benefits..
              </p>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
                <div className={styles.wheel_side2} >
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
