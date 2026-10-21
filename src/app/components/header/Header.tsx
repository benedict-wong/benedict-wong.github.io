'use client'
import styles from './header.module.scss'
import HeaderLink from './HeaderLink/HeaderLink'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return (
    <>
      <nav className={styles.container}>
        <HeaderLink onClick={() => router.push('/')}>Home</HeaderLink>
        <HeaderLink onClick={() => router.push('/#projects')}>Projects</HeaderLink>
        <HeaderLink onClick={() => router.push('/assets/files/Benedict Wong - Resume.pdf')}>Resume</HeaderLink>
      </nav>
    </>
  )
}
