import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar";
import React from "react";
import Footer from "@/components/footer";
import MobileNavbar from "@/components/mobileNavbar";
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dj Uncestar',
  description: 'Latest Hotest Mixes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<head>
  {/*<link rel="stylesheet" href="/fonts/css/all.css"/>*/}
</head>
      <body className={inter.className}>
      <section className=" relative ">
          <Navbar/>

          {children}

          <Footer/>
      </section>
     <section id="mobile_navbar_wrapper" className="invisible fixed min-h-screen z-50 top-0 right-0 w-screen bg-black/60">
         <MobileNavbar/>
         <div id="remove_mobile_navbar" className="bg-transparent absolute min-h-screen top-0 left-0 w-screen"></div>
     </section>

      <Script src="/mobile.js"></Script>
      </body>
    </html>
  )
}
