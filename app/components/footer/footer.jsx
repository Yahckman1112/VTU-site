import React from "react";
import styles from "./footer.module.scss";
import ContactForm from "./contactForm";
import { FaUser, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
function Footer(props) {
  const medias = [
    {
      logo: <FaFacebookF size={10} className={styles.foot_logo} />,
      link: "/",
    },
    {
      logo: <FaTwitter size={10} className={styles.foot_logo} />,
      link: "/",
    },
    {
      logo: <FaLinkedinIn size={10} className={styles.foot_logo} />,
      link: "/",
    },
  ];
  return (
    <div className={styles.body}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2508744244287!2d3.8917257142699344!3d7.547598212505562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f1cdb2ed5e7b%3A0x133fbb82df2b6282!2sOdo%20Oba%20Rd%2C%20200136%2C%20Mawniya%2C%20Oyo!5e0!3m2!1sen!2sng!4v1680284579983!5m2!1sen!2sng"
                width="100%"
                height="420"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={styles.map}
              ></iframe>

              <div className="row">
                <div className="col-12 col-lg-4 col-md-12 offset-lg-1">
                  <div className={styles.phone}>
                    <div className={styles.phone_logo}>
                      <FaUser size={10} className={styles.call_logo} />
                    </div>
                    <div className={styles.phone_num}>
                      <span className={styles.phone_num_1}>Phone</span>
                      <span className={styles.phone_num_2}>08146283237</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12">
                  {/* 1 */}
                  <div className={styles.phone}>
                    <div className={styles.phone_logo}>
                      <FaUser size={10} className={styles.call_logo} />
                    </div>
                    <div className={styles.phone_num}>
                      <span className={styles.phone_num_1}>Mobile</span>
                      <span className={styles.phone_num_2}>08050458307</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-12">
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        {medias.map((item) => (
          <Link href={item.link}>{item.logo}</Link>
        ))}
<div className={styles.copyright}>

        <p>Designed and developed by</p>
        <p> Yahckman1112 </p>
</div>
      </div>
    </div>
  );
}

export default Footer;
