import { Image } from 'semantic-ui-react'
import styles from './ProdructosBanner.module.css'

export function ProdructBanner() {
  return (
    
    <div className={styles.containerProductBanner}>
        <div className={styles.boxLetter}>
          <div>
            <h2>Tenemos los mejores</h2>
            <h1>Productos</h1>
          </div>
          <div>
            <h2>Para</h2>
            <h1>Cabello y barba</h1>
          </div>
        </div>
    </div>

  )
}
