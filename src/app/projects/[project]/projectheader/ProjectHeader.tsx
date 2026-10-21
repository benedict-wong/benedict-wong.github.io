import styles from './projectheader.module.scss'
import projectData from '@/data/project-data.json'

interface HeaderProps {
  projectId: string
}

export default function ProjectHeader({ projectId }: HeaderProps) {
  const project = projectData.find((item) => item.id === projectId)

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{project.name}</h1>
        <div className={styles.categories}>
          <span className={styles.category}>
            Date.
            <br />
            <span>{project.date}</span>
          </span>
          <span className={styles.category}>
            Role.
            <br />
            <span>{project.role}</span>
          </span>
          <span className={styles.category}>
            Platform.
            <br />
            <span>{project.platform}</span>
          </span>
        </div>
        <hr className={styles.divider} />
      </div>
    </>
  )
}
