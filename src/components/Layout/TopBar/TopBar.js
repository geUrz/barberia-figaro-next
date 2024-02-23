import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { Image, Label } from 'semantic-ui-react'
import { FaBars, FaCartArrowDown, FaHeart, FaHome, FaShoppingCart, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa'
import styles from './TopBar.module.css'
import { Search } from '../Search'


export function TopBar() {

  const { user } = useAuth()

  const router = new useRouter()

  const [menu, setMenu] = useState()

  const menuOpen = () => {
    setMenu(prevState => !prevState)
  }

  const total = 5

  return (

    <div className={styles.topBar}>
      <div className={styles.containerMenu}>

        <div className={styles.logoUser}>
          <div className={styles.logo}>
            <Link href='/'>
              <Image src='/img/logo.png' alt='Logo' />
            </Link>
          </div>

          <div className={styles.iconUser}>
            <FaUser onClick={
              user ?
                () => router.push('/account') :
                () => router.push('/join/signin')
            }
            />
            {user ? (
              <>
                <FaHeart onClick={() => router.push('/wishlist')} />
                <FaShoppingCart onClick={() => router.push('/cart')} />
                {total > 0 && <Label circular onClick={() => router.push('/cart')}>{total}</Label>}
              </>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className={styles.menu}>
          <Link href='/'>
            <FaHome />
          </Link>
          <Link href='/services'>
            Servicios
          </Link>
          <Link href='/products'>
            Productos
          </Link>
          <Link href='/about'>
            Nosotros
          </Link>
        </div>

        <div className={styles.iconBar}>
          <div onClick={menuOpen}>
            {menu ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </div>
        </div>

        <div className={styles.containerMenuSide} style={{ left: menu ? '0' : '-100%' }}>
          <Link href='/'>
            <div className={styles.topMenuSide} onClick={menuOpen}>
              <FaHome />
            </div>
          </Link>
          <div className={styles.listaMenuSide}>
            <Link href='/services'>
              <div onClick={menuOpen}>
                Servicios
              </div>
            </Link>
            <Link href='/products'>
              <div onClick={menuOpen}>
                Productos
              </div>
            </Link>
            <Link href='/about'>
              <div onClick={menuOpen}>
                Nosotros
              </div>
            </Link>
          </div>
          {user ? (
            <div className={styles.boxUsernameSide}>
              <h1>¡ Hola</h1>
              <h1>, {user.username} !</h1>
            </div>
          ) : ('')}
        </div>
      </div>

      <div className={styles.containerSearch}>
        <Search />
      </div> 

    </div>

  )
}
