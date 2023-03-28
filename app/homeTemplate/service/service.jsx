'use client'
import React,{useState} from "react";
import styles from "./service.module.scss";
function Service(props) {
    const [active, setActive] = useState(0)

    const buttons = [
        {label: 'Airtime Topup'},
        {label:'Data Subscription'},
        {label:'Web development '},
        {label:'Utility Bill'}
    ]
  return (
    <div className={styles.service}>
      <p className={styles.para1}>Our Service</p>
      <p className={styles.para2}>
        {" "}
        <span className={styles.span}>Service </span> we provide{" "}
      </p>

      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-6 col-md-12">
            <aside className="styles.icon">
                {buttons.map((item,index)=>(
                    <button className={styles.btn_serv}
                    style={{border:active==index && ' 3px solid rgba(219,138,222,1)', color:active==index && '#dc8cdb ', boxShadow:active==index && '0px 0px 15px rgba(0, 0, 0, 0.05)'}}
                    onClick={()=>setActive(index)}
                    >
                                Airtime Top up
                    </button>

                ))}
            </aside>
          </div>
          <div className="col-12 col-lg-6 col-md-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Service;
