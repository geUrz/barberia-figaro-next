import { useState } from 'react'
import { BasicLayout } from '@/layouts'
import { ChangeNameForm, ChangePassword, Info } from '@/components/Account'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import styles from './account.module.css'
import { FaSignOutAlt } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'
import { ArrowBack } from '@/components/Layout'

export default function Account() {

  const [reload, setReload] = useState(false)

  const onReload = () => setReload((prevState) => !prevState)


  const {user, logout} = useAuth()
  const router = useRouter()

  if(!user){
    router.push('/')
    return null
  }

  const logoutSignin = () => {
    logout()
    router.push('/')
  }

  return (
    
    <BasicLayout noFooter={false} onReload={onReload}>

      <div className={styles.containerAccount}>

        <ArrowBack />

        <Info onReload={onReload} />

        <div className={styles.boxSettings}>

          <ChangeNameForm reload={reload} onReload={onReload} />

          <ChangePassword reload={reload} onReload={onReload} />

        </div>

        <div className={styles.boxSignOut}>

          <Button
            negative
            onClick={logoutSignin}
          >
            <h1>Cerrar sesión</h1>
            <FaSignOutAlt />
          </Button>

        </div>

      </div>

    </BasicLayout>

  )
}
