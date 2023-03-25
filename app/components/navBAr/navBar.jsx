"use client";
import React, { useState } from "react";
import styles from "./navBAr.module.scss";
import Link from "next/link";
import { SiWikimediacommons } from "react-icons/si";
// import { Link } from 'next/link';
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
function NavBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={styles.header}>
    
          <div className={styles.title}>
            <p> 
            <span className={styles.logo}>D
               <span className={styles.logo_1}>W</span>
            </span>
            <span className={styles.title_main}>DataWheel</span>
            </p>
          </div>

      <nav className={styles.navs}>
        <Link href='/' className = {styles.nav_items}>Home</Link>
        <Link href='/' className = {styles.nav_items}>Service</Link>
        <Link href='/' className = {styles.nav_items}>Features</Link>
        <Link href='/' className = {styles.nav_items}>SignUp </Link>
        <Link href='/' className = {styles.nav_items}>ContactUs </Link>
        <Link href='/' className = {styles.nav_items}>Login</Link>
        <Link href='/' className = {styles.nav_items}></Link>
      </nav>

        {/* <div className={styles.logo}>
          <Link href="/">
            <p className={styles.logo_name}>
              Data<span>Wheel</span>{" "}
            </p>
          </Link>
        </div>

        <nav className={styles.navs}>
          <Link href="/" className={styles.nav_items}>
            Home
          </Link>
          <Link href="/service" className={styles.nav_items}>
            Servive
          </Link>
          <Link href="/features" className={styles.nav_items}>
            Feature
          </Link>
          <Link href="/signUp" className={styles.nav_items}>
            SignUp
          </Link>
          <Link href="/contact" className={styles.nav_items}>
            ContactUs
          </Link>
          <Link href="login" className={styles.nav_items}>
            Login
          </Link>
        </nav>

        <div>
          <SiWikimediacommons size={34} onClick={handleShow
          } />


      <Offcanvas placement={'end'} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <div className={styles.logo}>
          <Link href="/">
            <p className={styles.logo_name}>
              Data<span>Wheel</span>{" "}
            </p>
          </Link>
        </div>

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div> */}
      </div>
    </div>
  );
}

export default NavBar;
