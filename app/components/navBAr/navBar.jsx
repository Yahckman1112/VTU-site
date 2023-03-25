"use client";
import React, { useState } from "react";
import styles from "./navBAr.module.scss";
import Link from "next/link";
import { SiWikimediacommons } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import {FaPodcast,FaGgCircle, FaUser} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'


import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
function NavBar(props) {

  const navItems =[
    {
      icon:<AiFillHome size={20} className={styles.resp_navs_logo}/>,
      label:'Home',
      link: '/'
    },
    {
      icon:< FaGgCircle size={20} className={styles.resp_navs_logo}/>,
      label:'Service',
      link: '/'
    },
    {
      icon:<FaPodcast size={20} className={styles.resp_navs_logo}/>,
      label:'Features',
      link: '/'
    },
    {
      icon:<FaUser size={20} className={styles.resp_navs_logo}/>,
      label:'SignUp',
      link: '/'
    },
    {
      icon:<FiPhoneCall size={20} className={styles.resp_navs_logo}/>,
      label:'ContactUs',
      link: '/'
    },
    {
      icon:<BiLogIn size={20} className={styles.resp_navs_logo}/>,
      label:'Login',
      link: '/'
    },
  ]
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
        <Link href='/' className={styles.link}>

          <p>
            <span className={styles.logo}>
              D<span className={styles.logo_1}>W</span>
            </span>
            <span className={styles.title_main}>DataWheel</span>
          </p>
        </Link>
        </div>

        <nav className={` ${styles.hideOnMobile} ${styles.navs}`}>
         {navItems.map((item,i)=>(
          <Link href={item.link} key={i}  className={styles.nav_items}>
            {item.label}
          </Link>

         ))}
        </nav>

        <div className={`${styles.icon} ${styles.hideOnDesktop}`}>
          <HiMenuAlt2 color={'white'} size={34} onClick={handleShow} />

          <Offcanvas
            className={styles.offcanvas}
            placement={"end"}
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className={styles.offcanvas_title}>
                <Link href='/'className={styles.link}> 
                <p>
                  <span className={styles.offcanvas_title_logo}>
                    D<span className={styles.offcanvas_title_logo_1}>W</span>
                  </span>
                  <span className={styles.offcanvas_title_text}>DataWheel</span>
                </p>
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {navItems.map(item=>(

              <div className={styles.resp_nav}>
                <Link
                  href={item.link}
                  onClick={handleClose}
                  className={styles.resp_navs}
                >
                  {item.icon}
                
                  <span className={styles.resp_nav_text}>{item.label}</span>{" "}
                </Link>
              </div>
            ))}

            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
