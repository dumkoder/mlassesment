import {SyntheticEvent, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../styles/Header.module.scss'

interface HeaderProps {
    searchProduct: (event: SyntheticEvent) => void
}
const Header = () =>{
    const [searchInput, setSearchInput] = useState<string>('');
    const router = useRouter()

    const searchProduct = (event: SyntheticEvent) =>{
      event.preventDefault()
      router.push(`/items?search=${searchInput}`)
  }
  const handleChange = (event: SyntheticEvent) =>{
      const value = (event.target as HTMLInputElement).value
      setSearchInput(value);
  }
 
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href='/'>
                    <a className={styles.logo}>
                        <img src="/Logo_ML.png" srcSet="/Logo_ML@2x.png 2x" alt="Logo Mercadolibre"/>
                    </a>
                </Link>
                <form onSubmit={searchProduct} method="GET">
                    <input 
                        id="search" 
                        name="search" 
                        type="text"  
                        value={searchInput}
                        onChange={handleChange}
                        placeholder="Nunca dejes de buscar" 
                        required 
                    />
                    <button type="submit">
                        <img src="/ic_Search.png" srcSet="/ic_Search@2x.png 2x" alt="Buscar"/>
                    </button>
                </form>
            </div>
        </header>
    )
}

export default Header