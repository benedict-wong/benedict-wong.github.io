import styles from './technicaldetails.module.scss'

interface TechnicalProps {
  technical: string
}

export default function TechnicalDetails({ technical }: TechnicalProps) {
  return (
    <>
      <article className={styles.container}>
        <h2 className={styles.title}>Technical Details</h2>
        <p>{technical}</p>
      </article>
    </>
  )
}
