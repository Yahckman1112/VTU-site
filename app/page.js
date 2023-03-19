
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import HomeBanner from './homeTemplate/Banner/landingPage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main} >
      < HomeBanner/>
    </main>
  )
}
