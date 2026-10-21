import styles from './techstack.module.scss'
import TechStackSection from './techstacksection/TechStackSection'
import skills from '@/data/skills.json'

export default function TechStack() {
  return (
    <>
      <div className={styles.container}>
        <h1>Tech Stack</h1>
        <hr></hr>
        {skills.map((category) => (
          <TechStackSection key={category.id} title={category.title} skills={category.skills} />
        ))}
      </div>
    </>
  )
}
