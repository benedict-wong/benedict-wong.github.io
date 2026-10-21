'use client'
import styles from './projectcard.module.scss'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface CardProps {
  id: string
  title: string
  description: string
  type: string
  date: string
}

export default function ProjectCard({ id, title, description, type, date }: CardProps) {
  const [wip, setWip] = useState(id === 'SpiritsChoice' || id === 'PlanetMojo')
  const router = useRouter()
  const project = id

  function ClickHandler() {
    router.push(`/projects/${project}`)
  }

  return (
    <>
      <div className={`${styles.container} ${wip ? styles.unavailable : ''}`} onClick={wip ? (e) => e.preventDefault() : ClickHandler}>
        {wip && <div className={styles.wip}>Work in progress</div>}
        <img className={styles.image} alt={`${title} Project Image`} src={`/assets/image/previews/preview-${id}.png`} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <p className={styles['footer-item']}>{type}</p>
          <p className={styles['footer-item']}>{date}</p>
        </div>
      </div>
    </>
  )
}
