import styles from './overview.module.scss'

interface OverviewProps {
  overview: string
}

export default function Overview({ overview }: OverviewProps) {
  return (
    <>
      <article className={styles.container}>
        <h2 className={styles.title}>Overview</h2>
        {overview}
      </article>
    </>
  )
}
