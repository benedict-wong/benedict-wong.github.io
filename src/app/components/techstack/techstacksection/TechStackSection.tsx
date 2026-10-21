import styles from './techstacksection.module.scss'

interface SectionProps {
  title: string
  skills: string[]
}

export default function TechStackSection({ title, skills }: SectionProps) {
  const skillItems = skills.map((skill) => (
    <span key={skill} className={styles.skill}>
      {skill}
    </span>
  ))

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <br />
        <div className={styles['skills-container']}>{skillItems}</div>
      </section>
    </>
  )
}
