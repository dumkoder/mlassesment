import styles from '../styles/Breadcrumbs.module.scss'

const Breadcrumbs = ({categories} : any) => {
    return (
        <div className={styles.container}>
            <ul>
                {categories.map( ( item: string, index: number ) => (
                    <>
                        {(index!== 0) && <li><p>{'>'}</p></li>}
                        <li>
                            <p>
                                {item}  
                            </p>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumbs