import { useEffect } from "react";
import { BasicLayout } from "@/layouts";
import { map, size } from "lodash";
import styles from "./search.module.css"
import { Product } from "@/components/Products/ListProducts/Product";


export default function Search(props) {

  const { products, pagination, searchText } = props

  const hasResult = size(products) > 0

  useEffect(() => {
    document.getElementById('searchProduct').focus()
  }, [])

  return (


    <BasicLayout relative noFooter={false}>

      {hasResult ? (
        <>

          <div className={styles.mainProducts}>
            {map(products, (product) => (
              <Product
                key={product.id}
                productId={product.id}
                product={product.attributes}
                productHeart={product}
              />
            ))}
          </div>

        </>
      ) : (
        <h1>No se encontro</h1>
      )}

    </BasicLayout>

  )
}
