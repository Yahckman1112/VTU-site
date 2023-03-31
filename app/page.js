import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import HomeBanner from "./homeTemplate/Banner/landingPage";
import Features from "./homeTemplate/fetures/features";
import Service from "./homeTemplate/service/service";
import Discount from "./homeTemplate/dicount/discount";
import Footer from './components/footer/footer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBanner />
      <Features />
      <Service />
      <Discount />
      < Footer/>
    </main>
  );
}
