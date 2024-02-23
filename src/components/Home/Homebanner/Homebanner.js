import { useState, useEffect } from "react"
import { map, size } from "lodash"
import { Image } from "semantic-ui-react"
import Slider from "react-slick"
import styles from './Homebanner.module.css'
import { HomebannerMobile, HomebannerPc } from "@/api"

const ctrlBannerMobile = new HomebannerMobile()
const ctrlBannerPc = new HomebannerPc()

export function Homebanner() {

  const [bannerMobile, setBannerMobile] = useState(null) 

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBannerMobile.getAll()
        setBannerMobile(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [])

  const [bannerPc, setBannerPc] = useState(null) 

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlBannerPc.getAll()
        setBannerPc(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [])

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidersToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
  }

  return (
    
    <>
      <div className={styles.containerHomebanner}>
        <div className={styles.bannerMobile}>
          <Slider {...settings}>
            {map(bannerMobile, (banner) => (
              <div key={banner.id}>
                <Image src={banner.attributes.image.data.attributes.url} /> 
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.bannerPc}>
          <Slider {...settings}>
            {map(bannerPc, (banner) => (
              <div key={banner.id}>
                <Image src={banner.attributes.image.data.attributes.url} /> 
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>

  )
}
