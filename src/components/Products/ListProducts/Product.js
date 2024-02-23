import { Image } from 'semantic-ui-react'
import Link from 'next/link'
import { Wishlist } from '../../Products'
import styles from './Product.module.css'

export function Product(props) {

  const { product, onReload, productHeart } = props

  return (

    <div className={styles.boxMainProduct}>

<div className={styles.boxHeart}>
      <Wishlist product={productHeart} removeCallback={onReload} />
    </div>

<Link href={`/products/${product.slug}`}>
      <div className={styles.boxProduct}>
        <div className={styles.boxImg}>
          <Image src={product.image.data.attributes.url} />
        </div>
        <h1>{product.title}</h1>
      </div>
    </Link>

    </div>

  )
}
