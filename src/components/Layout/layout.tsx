import localFont from 'next/font/local'
import * as React from 'react'
import Navbar from '../NavBar/NavBar';
import { LayoutProps } from "@/types/index";


const soundScape = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/Soundscape-Bold.woff2',
      weight: '400'
    },
  ],
  variable: '--font-sound-scape'
})

const ping = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/PingLCG-Medium.woff2',
      weight: '400'
    },
  ],
  variable: '--font-ping'
})

export default function Layout({ children }: LayoutProps) {
  return (
    <main >
      <Navbar classes={ping.variable} />
      <div className={soundScape.variable}>{children}</div>
    </main>
  );
}