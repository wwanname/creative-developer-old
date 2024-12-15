import styles from './page.module.scss'
import Play from '../components/play/play';
import Smile from '../components/smile/smile';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Smile />
        <Play />
     </div>
   </main>
  )
}