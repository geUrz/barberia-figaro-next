import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Input } from "semantic-ui-react"
import { useRouter } from "next/router"
import styles from "./Search.module.css"

export function Search() {

  const router = useRouter()

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setSearchText(router.query.s || "")
  },[])

  const onSearch = (text) => {
    setSearchText(text)
    router.replace(`/search?s=${text}`)
  }

  return (

    <div className={styles.containerSearch}>

      <FaSearch />
      <Input 
        id='searchProduct'
        placeholder='Buscar producto o servicio'
        focus={true}
        value={searchText}
        onChange={(_, data) => onSearch(data.value)}
      />

    </div>

  )
}
