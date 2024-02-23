import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BasicLayout } from '@/layouts'
import { Products } from '@/api'
import { Image } from 'semantic-ui-react'
import { FaArrowLeft } from 'react-icons/fa'
import { useAuth } from '@/hooks'
import { Cart, Wishlist } from '@/components/Products'
import styles from './id.module.css'
import { ArrowBack } from '@/components/Layout'

export default function Product(props) {

  const { products } = props
  const product = products.attributes

  const router = useRouter()

  return (

    <BasicLayout relative>

      <div className={styles.containerProduct}>

        <ArrowBack title={product.title} />

        <div className={styles.boxProduct}>
          <div className={styles.boxImg}>
            {products ? (
              <Image src={product.image.data.attributes.url} />
            ) : (
              <h1>Sin imagen</h1>
            )}
          </div>
          <div className={styles.box1}>
            <h1>{product.title}</h1>
          </div>
          <div className={styles.box2}>
            <h1>MXN {product.price}</h1>
            <div>
              <Wishlist product={products} />
              <Cart />
            </div>
          </div>
          <div className={styles.box3}>
            <p>{product.description1}</p>
            <p>{product.description2}</p>
            <p>{product.description3}</p>
          </div>
        </div>
      </div>

    </BasicLayout>

  )
}

export async function getServerSideProps(context) {

  const { params: { products } } = context

  const productCtrl = new Products()
  const response = await productCtrl.getBySlug(products)

  return {

    props: {
      products: response,
    }

  }
}
