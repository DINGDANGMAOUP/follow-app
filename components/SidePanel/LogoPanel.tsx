import Image from "next/image"
import defaultLogo from '@/assets/logo.png'
import Link from 'next/link'
import React from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
interface LogoPanelProps {
  href?: string,
  logo?: StaticImport | string
}
const defaultHome = '/'
const LogoPanel: React.FC<LogoPanelProps> = ({ href, logo }) => {
  return (
    <div className="flex justify-center">
      <Link className="cursor-auto flex flex-row items-center" href={href || defaultHome}>
        <Image src={logo || defaultLogo} alt="logo" width={50} height={50} />
        <div className="font-semibold tracking-tight text-center ml-2 text-2xl">Simple</div>
      </Link>
    </div>
  )
}

export default LogoPanel