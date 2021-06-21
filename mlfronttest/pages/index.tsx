import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prueba Mercadolibre</title>
        <meta name="description" content="Prueba Mercadolibre de Danny Urrea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <div className={styles.container}>
        
      </div>
    </div>
  )
}
