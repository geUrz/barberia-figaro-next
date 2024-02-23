import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import { Wishlist as WishlistIcon } from '../Products'
import styles from './Wishlist.module.css'

export function Wishlist(props) {

  const {wishlist, onReload} = props

  const product = wishlist.product.data.attributes
  const wishlists = wishlist.product.data

  return (
    
    <div className={styles.boxMainWishlist}>
    
    
    <div className={styles.boxHeart}>
      <WishlistIcon product={wishlists} removeCallback={onReload} />
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
