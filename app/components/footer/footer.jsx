import React from 'react';
import styles from './footer.module.scss'
import ContactForm from './contactForm';
function Footer(props) {
    return (
        <div className={styles.body}>
          <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 col-md-12"></div>
                <div className="col-12 col-lg-4 col-md-12">
                    <div>
                        < ContactForm/>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    );
}

export default Footer;