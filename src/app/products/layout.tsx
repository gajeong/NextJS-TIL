import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '제품 사이트',
  description: '멋진 제품 만드는중',
  icons: {
    icon: '/favicon.ico',
  },
}
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성</Link>
        <Link href='/products/man'>남성</Link>
      </nav>
      {children}
    </div>
  )
}
