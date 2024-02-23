import { useState, useEffect } from 'react'
import { Wishlist as WishlistApi } from '@/api'
import { useAuth } from '@/hooks'
import { FaHeart } from 'react-icons/fa'
import { useRouter } from 'next/router'
import styles from './Wishlist.module.css'

const ctrlWishlist = new WishlistApi()

export function Wishlist(props) {

  const {product, removeCallback} = props

  const {user} = useAuth()

  const router = useRouter()

  const [hasWishlist, setHasWishlist] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlWishlist.check(user.id, product.id)
        setHasWishlist(response)
      } catch (error) {
          setHasWishlist(false)
          console.error(error)
      }
    })()
  }, [product])

  //if(hasWishlist === null) return null

  const addWishlist = async () => {
    try {
      const response = await ctrlWishlist.add(user.id, product.id)
      setHasWishlist(response)
    } catch (error) {
        console.error(error)
    }
  }
  
  const deleteWishlist = async () => {
    try {
      await ctrlWishlist.delete(hasWishlist.id)
      setHasWishlist(false)

      if(removeCallback){
        removeCallback()
      }

    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div className={styles.boxHeart}>
      {user ? (
        <>
          <FaHeart
            className={hasWishlist ? `${styles.trueWishlist}` : ''}
            onClick={hasWishlist ? deleteWishlist : addWishlist}
          />
        </>
      ) : (
        <>
          <FaHeart onClick={() => router.push('/join/signin')} />
        </>
      )}
    </div>
  )
}
