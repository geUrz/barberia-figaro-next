import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'
import styles from './ArrowBack.module.css'

export function ArrowBack(props) {

  const {title} = props

  const router = useRouter()

  return (

    <div className={styles.iconArrow}>
      <FaArrowLeft
        onClick={() => router.back()}
      />
      <h1>{title}</h1>
    </div>

  )
}
