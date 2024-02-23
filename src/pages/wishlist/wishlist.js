import { BasicLayout } from '@/layouts'
import styles from './wishlist.module.css'
import { ArrowBack } from '@/components/Layout'
import { ListWishlist } from '@/components/Wishlist'

export default function Wishlist() {
  return (
    
    <BasicLayout relative>
      
      <ArrowBack title='Lista de deseos' />

      <div className={styles.containerListWishlist}>
        <ListWishlist />
      </div>

    </BasicLayout>

  )
}
