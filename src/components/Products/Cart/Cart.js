import { useState, useEffect } from 'react'
import { Wishlist as WishlistApi } from '@/api'
import { useAuth } from '@/hooks'
import { FaCartPlus } from 'react-icons/fa'
import { useRouter } from 'next/router'
import styles from './Cart.module.css'

export function Cart() {

  const { user } = useAuth()

  const router = useRouter()

  return (
    <div className={styles.boxCart}>
      {user ? (
        <>
          <FaCartPlus
            //className={hasWishlist ? `${styles.trueWishlist}` : ''}
          />
        </>
      ) : (
        <>
          <FaCartPlus onClick={() => router.push('/join/signin')} />
        </>
      )}
    </div>
  )
}
