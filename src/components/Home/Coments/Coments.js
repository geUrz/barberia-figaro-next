import { useState, useEffect } from "react"
import { map } from "lodash"
import Slider from "react-slick"
import { Coments as Coment } from "@/api"
import styles from './Coments..module.css'
import { FaComments } from "react-icons/fa"

const ctrlSlideComents = new Coment()

export function Coments() {

  const [slideComents, setSlideComents] = useState(null) 

  useEffect(() => {
    (async () => {
      try {
        const response = await ctrlSlideComents.getAll()
        setSlideComents(response.data)
      } catch (error) {
          console.error(error)
      }
    })()
  }, [])

  const settingsMobile = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6500,
    pauseOnHover: true
  }

  const settingsPc = {
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6500,
    pauseOnHover: true
  }

  return (
    
    <>
    
      <div className={styles.containerSlideMobile}>
        <div className={styles.boxComentsLetter}>
          <h2>Comentarios de nuestros</h2>
          <h1>clientes</h1>
        </div>
        <Slider {...settingsMobile}>
          {map(slideComents, (slideComent) => (
            <div key={slideComent.id} className={styles.boxSlide}>
                <h2><FaComments /></h2>
                <h1>{slideComent.attributes.name}</h1> 
                <p>{slideComent.attributes.coment}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.containerSlidePc}>
        <div className={styles.boxComentsLetter}>
          <h2>Comentarios de nuestros</h2>
          <h1>clientes</h1>
        </div>
        <Slider {...settingsPc}>
          {map(slideComents, (slideComent) => (
            <div key={slideComent.id} className={styles.boxSlide}>
              <h2><FaComments /></h2>
              <h1>{slideComent.attributes.name}</h1> 
              <p>{slideComent.attributes.coment}</p>
            </div>
          ))}
        </Slider>
      </div>

    </>

  )
}
