import { TitlePage } from "@/components/Layout"
import { BannerStatic } from "@/components/Layout/BannerStatic"
import { ListProducts } from "@/components/Products" 
import { BasicLayout } from "@/layouts"
import styles from './products.module.css'


export default function Products() {
  return (
    
    <BasicLayout relative>

      <BannerStatic />

      <TitlePage titlePage='productos' />

      <div className={styles.containerListProduct}>
        <ListProducts />
      </div>

    </BasicLayout>

  )
}
