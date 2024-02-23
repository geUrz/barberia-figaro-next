import { BasicLayout } from "@/layouts"
import { Homebanner } from "@/components/Home/Homebanner"
import { Services } from "@/components/Home/Services"
import { ProdructBanner } from "@/components/Home/ProdructBanner/ProdructosBanner"
import { Coments } from "@/components/Home/Coments"
import styles from './home.module.css'

export default function Home() {  

  return (
    <BasicLayout relative>

      <Homebanner />

      <div className={styles.containerHome}>
        <div className={styles.boxLetter}>
          <h1>¡ la barberia</h1>
          <h2>que está haciendo la diferencia</h2>
          <h2>en la <span>ciudad !</span></h2>
        </div>
      </div>

      <Services />

      <ProdructBanner />

      <Coments />
      
    </BasicLayout>
  )
}
