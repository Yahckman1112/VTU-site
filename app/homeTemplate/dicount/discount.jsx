import React from 'react';
import styles from './discount.module.scss'
import Image from 'next/image'
import img from './../../images/cta-left-image.png'
import  Link  from 'next/link';
function Discount(props) {
    return (
        <div>
        <div className={styles.body}>
          <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 col-md-6">
        
                    < Image src={img} height='1px' width='1px'/>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                    <p className={styles.para1}>
                        Up to 5% Off for your First Transaction

                    </p >
                        <div className={styles.btn_cont} >
                            <Link href='/' className={styles.btn} >Register Now!!! </Link>
                        </div>
                </div>
            </div>
            </div>  
        </div>

        </div>
    );
}

export default Discount;