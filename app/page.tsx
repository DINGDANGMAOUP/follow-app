'use client'
import TitleBar from "@/components/TitleBar";
import useIsClient from "@/hooks/useIsClient";
import { useAsyncEffect } from "ahooks";
import { platform } from '@tauri-apps/plugin-os';
import MusicPage from "@/components/music/page";
let currentPlatform = 'unknown';
export default function Home() {
  const isClient = useIsClient()
  useAsyncEffect(async () => {
    currentPlatform = platform()
  }, [isClient])
  return (
    <>
      {currentPlatform === 'windows' && <TitleBar />}
      <MusicPage />
    </>
  );
}
