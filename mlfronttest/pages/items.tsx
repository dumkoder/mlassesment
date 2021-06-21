import { v4 as uuidv4 } from 'uuid';
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Items.module.scss'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'

interface itemsTypes{ 
   results:{ 
    author: {
        name: string,
        lastName: string
    },
    categories: [string],
    items: [{
      id: string,
      picture: string,
      title: string,
      free_shipping: boolean,
      condition: string,
      price:{
        amount: number,
        currency: string, 
        decimals: number
      }
    }]
  }
}

const Items = ({ results: { categories, items} }: itemsTypes) =>{
  return (
    <>
      <Head>
        <title>Resutaldos de busqueda Mercadolibre </title>
        <meta name="description" content="Resultados de busqueda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      {categories && <Breadcrumbs categories={categories}/>}

      <main className={styles.container}>
        <ul>
          {items.map( (item, index) => {
            const uniq = uuidv4()
            const price = new Intl.NumberFormat('es-AR', { style: 'currency', currency: item.price.currency })
                          .format(item.price.amount + item.price.decimals)
            return(
              <li key={uniq}>
                <article>
                  <div className={styles.thumbImage}>
                    <img src={item.picture} alt={item.title} width={180} height={180}/>
                  </div>
                  <div className={styles.description}>
                    <div className={styles.price}>
                      <p >
                        {price}
                      </p>
                      {item.free_shipping && <img src="ic_shipping.png" srcSet="ic_shipping@2x.png 2x" alt="envio gratis" />}
                    </div>
                    <h2>
                      <Link href={`/items/${item.id}`}>
                        <a>
                          {item.title}
                        </a>
                      </Link>
                    </h2>
                  </div>
                  <div className={styles.condition}>
                    {item.condition}
                  </div>
                </article>
              </li>
            )}
          )}
        </ul>
      </main>
    </>
  )
}

export default Items

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query: { search }} = context;
  const res = await fetch(`http://localhost:8080/api/items?search=${search}`)
  const results: [] = await res.json()
  return {
    props: {
      results
    },
  }
}