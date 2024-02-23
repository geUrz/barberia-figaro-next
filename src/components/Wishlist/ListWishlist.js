import { Wishlist as WishlistApi } from '@/api'
import { useEffect, useState } from 'react'
import { ListEmpty, Loading } from '../Layout'
import { map, size } from 'lodash'
import { useAuth } from '@/hooks'
import { Wishlist } from './Wishlist'
import styles from './ListWishlist.module.css'

const ctrlWishlist = new WishlistApi()

export function ListWishlist() {

  const {user} = useAuth()

  const [reload, setReload] = useState(false)

  const onReload = () => setReload(prevState => !prevState)

  const [wishlists, setWishlists] = useState(null)

  useEffect(() =>{
  (async () => {
    try {
      const response = await ctrlWishlist.getAll(user.id)
      setWishlists(response)
    } catch (error) {
        console.error(error)
    }
  })()
  }, [reload])

  return (
    
    <>
    
      {!wishlists ? (
        <Loading />
      ) : 
      size(wishlists) === 0 ? (
        <ListEmpty />
      ) : (
        <div className={styles.mainWishlist}>
          {map(wishlists, (wishlist) => (
            <Wishlist 
              key={wishlist.id} 
              wishlistId={wishlist.id}
              wishlist={wishlist.attributes}  
              onReload={onReload}
            />
          ))}
        </div>
      )}

    </>

  )
}
