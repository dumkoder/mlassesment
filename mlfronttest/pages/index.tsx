import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prueba Mercadolibre</title>
        <meta name="description" content="Prueba Mercadolibre de Danny Urrea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>
  )
}
