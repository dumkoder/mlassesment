import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../../styles/Id.module.scss'
import Header from '../../components/Header'


interface itemTypes{ 
   results:{ 
    author: {
        name: string,
        lastName: string
    },
    item: {
      id: string,
      picture: string,
      title: string,
      free_shipping: boolean,
      condition: string,
      description: string,
      sold_quantity: number,
      price:{
        amount: number,
        currency: string, 
        decimals: number
      }
    }
  }
}

const Item = ({results:{item}}:itemTypes) =>{

    const price = new Intl.NumberFormat('es-AR', { style: 'currency', currency: item.price.currency })
                          .format(item.price.amount + item.price.decimals)
    
    return (
        <>
            <Head>
                <title>Detalle Producto :: Mercadolibre </title>
                <meta name="description" content="Detalle de prodcuto" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <main className={styles.container}>
                <article>
                    <div className={styles.description}>
                        <div className={styles.imgContainer}>
                            <img src={item.picture}/>
                        </div>
                        <h3>Descripción del producto</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className={styles.sideBar}>
                        <p className={styles.info}>
                            {item.condition} - {item.sold_quantity} vendidos
                        </p>
                        <h2>{item.title}</h2>
                        <p className={styles.price}>{price}</p>
                        <button>Comprar</button>
                    </div>
                </article>
            </main>
        </>
    )
}
export default Item

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query: { id }} = context;
  const res = await fetch(`http://localhost:8080/api/items/${id}`)
  const results: [] = await res.json()
  return {
    props: {
      results
    },
  }
}