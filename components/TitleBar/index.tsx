'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './index.module.css'
import { Button } from '../ui/button'
import { Window } from '@tauri-apps/api/window'
import cs from 'classnames'
import Icon from '../Icon'
const TitleBar = () => {
  const [isMaximize, setIsMaximize] = useState(false)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const appWindow = useMemo(() => {
    return isClient ? new Window('main') : undefined
  }, [isClient])
  const minimize = async () => appWindow?.minimize()
  const maximize = async () => setIsMaximize(!isMaximize)
  const close = async () => appWindow?.close()
  useEffect(() => {
    if (isMaximize) appWindow?.maximize()
    else appWindow?.unmaximize()
  }, [appWindow, isMaximize])

  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      <div data-tauri-drag-region className={styles['title-toolbar']}>
        <Button className={styles['titlebar-button']} variant='ghost' size='icon' onClick={minimize}>
          <Icon name='minus' />
        </Button>
        <Button className={styles['titlebar-button']} variant='ghost' size='icon' onClick={maximize}>
          {
            isMaximize ? <Icon name='minimize' /> : <Icon name='maximize' />
          }
        </Button>
        <Button className={cs(styles['titlebar-button'], 'hover:bg-red-300')} variant='ghost' size='icon' onClick={close}>
          <Icon name='x' />
        </Button>
      </div>
    </div>
  )
}

export default TitleBar