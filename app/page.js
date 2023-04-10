'use client'
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import HomeBanner from "./homeTemplate/Banner/landingPage";
import Features from "./homeTemplate/fetures/features";
import Service from "./homeTemplate/service/service";
import Discount from "./homeTemplate/dicount/discount";
import Footer from './components/footer/footer';
import Loader from './components/loader/loader'
const inter = Inter({ subsets: ["latin"] });
import {useEffect, useState} from 'react'
import NavBar from "./components/navBAr/navBar";
export default function Home() {
  const [isLoading, setisLoading]= useState(true)

  useEffect(()=>{
    const time= setTimeout(() => {
      setisLoading(false)
    }, 1000);
  })
  return (
    <main className={styles.main}>
      {isLoading && < Loader/>}
      < NavBar/>
      <HomeBanner />
      <Features />
      <Service />
      <Discount />
      < Footer/>
    </main>
  );
}
