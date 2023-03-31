import React from "react";
import styles from "./footer.module.scss";
import ContactForm from "./contactForm";
function Footer(props) {
  const google =
    "https://www.google.com/maps/place/Odo+Oba+Rd,+200136,+Mawniya,+Oyo/@7.5475929,3.8939144,17z/data=!4m6!3m5!1s0x1039f1cdb2ed5e7b:0x133fbb82df2b6282!8m2!3d7.5475929!4d3.8939144!16s%2Fg%2F1hjgk3qz3";
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
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-12">
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
