import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Khoi Nguyen - Homepage</title>
        <meta name="description" content="Khoi Nguyen's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

    </div>
  )
}

export default Home
