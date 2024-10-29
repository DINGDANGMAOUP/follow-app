'use client'
import TitleBar from "@/components/TitleBar";
import useIsClient from "@/hooks/useIsClient";
import { useAsyncEffect } from "ahooks";
import Image from "next/image";
import { platform } from '@tauri-apps/plugin-os';
import { Menu } from "@/components/music/menu";
import { Sidebar } from "@/components/music/sidebar";
import { playlists } from "@/components/music/data/playlists";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { listenNowAlbums, madeForYouAlbums } from "@/components/music/data/albums";
import { AlbumArtwork } from "@/components/music/album-artwork";
import { PodcastEmptyPlaceholder } from "@/components/music/podcast-empty-placeholder";
import Icon from "@/components/Icon";
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
