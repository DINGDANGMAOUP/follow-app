'use client'
import useIsClient from '@/hooks/useIsClient'
import styles from './index.module.css'
import { platform } from '@tauri-apps/plugin-os';

import Toolbar from './Toolbar'
import WindowControls from './WindowControls'
import { cn } from '@/lib/utils';
const TitleBar = () => {
  const isClient = useIsClient()
  const [currentPlatform, setCurrentPlatform] = useState<string>('')
  useAsyncEffect(async () => {
    const res = await platform()
    setCurrentPlatform(res)
  }, [isClient])
  return (
    <div data-tauri-drag-region={currentPlatform === 'windows'} className={styles.titlebar}>
      <div className={cn(styles['title-toolbar'],currentPlatform === 'windows'?'justify-between':'justify-start')}>
      <Toolbar />
      {currentPlatform === 'windows' && 
        <WindowControls />
      }
      </div>
    </div>
  )
}

export default TitleBar