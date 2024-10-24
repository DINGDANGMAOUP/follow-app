'use client'
import React, {  useEffect, useMemo, useState } from 'react'
import styles from './index.module.css'
import { Button } from '../ui/button'
import {  Window } from '@tauri-apps/api/window'
import Icon from '../Icon'

const TitleBar = () => {
  const [isMax,setMax] = useState(false)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const appWindow = useMemo(() => {
    return isClient ? new Window('main') : undefined
  }, [isClient])
  appWindow?.once('tauri://move',event=>{
    console.log('tauri://move',event)
  })
  const minimize = async () => appWindow?.minimize()
  const maximize = async () => appWindow?.toggleMaximize()
  const close = async () => appWindow?.close()
  useEffect(()=>{
    appWindow?.once("tauri://drag-drop",event=>{
      console.log('drag-drop',event)
    })
  },[appWindow])

  return (
    <div data-tauri-drag-region className={styles.titlebar}>
      <div data-tauri-drag-region className={styles['title-toolbar']}>
        <Button className={styles['titlebar-button']} variant='ghost' size='icon' onClick={minimize}>
          <Icon name='minus' />
        </Button>
        <Button className={styles['titlebar-button']} variant='ghost' size='icon' onClick={maximize}>
          {
            isMax?<Icon name='maximize' />:<Icon name='maximize-2' />
          }
        </Button>
        <Button className={styles['titlebar-button']} variant='ghost' size='icon' onClick={close}>
          <Icon name='x' />
        </Button>
      </div>
    </div>
  )
}

export default TitleBar