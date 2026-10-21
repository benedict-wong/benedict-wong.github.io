import styles from './impact.module.scss'

interface ImpactProps {
  impact: string
}

export default function Impact({ impact }: ImpactProps) {
  return (
    <>
      <article className={styles.container}>
        <h2 className={styles.title}>Impact</h2>
        <ul>
          {impact
            .split('* ')
            .filter((item) => item.trim() != '')
            .map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
        </ul>
      </article>
    </>
  )
}
