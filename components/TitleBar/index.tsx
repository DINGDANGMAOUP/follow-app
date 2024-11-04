'use client'
import useIsClient from '@/hooks/useIsClient'
import styles from './index.module.css'
import { platform } from '@tauri-apps/plugin-os';
import cs from 'classnames'
import Menu from './Menu'
import WindowControls from './WindowControls'
const TitleBar = () => {
  const isClient = useIsClient()
  const [currentPlatform, setCurrentPlatform] = useState<string>('')
  useAsyncEffect(async () => {
    const res = await platform()
    setCurrentPlatform(res)
  }, [isClient])
  return (
    <div data-tauri-drag-region={currentPlatform === 'windows'} className={styles.titlebar}>
      <div className={cs(styles['title-toolbar'],currentPlatform === 'windows'?'justify-between':'justify-start')}>
      <Menu />
      {currentPlatform === 'windows' && 
        <WindowControls />
      }
      </div>
    </div>
  )
}

export default TitleBar