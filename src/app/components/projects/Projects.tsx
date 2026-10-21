import ProjectCard from './projectcard/ProjectCard'
import styles from './projects.module.scss'
import previews from '@/data/portfolio-previews.json'

export default function Projects() {
  return (
    <>
      <div id="projects" className={styles.container}>
        <h1>Projects</h1>
        <hr></hr>
        <section className={styles['projects-container']}>
          {previews.map((preview) => (
            <ProjectCard key={preview.id} id={preview.id} title={preview.title} description={preview.description} type={preview.type} date={preview.date} />
          ))}
        </section>
      </div>
    </>
  )
}
