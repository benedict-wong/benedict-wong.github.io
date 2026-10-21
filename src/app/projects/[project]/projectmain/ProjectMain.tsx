import styles from './projectmain.module.scss'
import projectData from '@/data/project-data.json'
import Overview from './mainsections/Overview'
import Responsibilities from './mainsections/Responsibilities'
import Impact from './mainsections/Impact'
import TechnicalDetails from './mainsections/TechnicalDetails'
import Video from './mainsections/Video'

interface MainProps {
  projectId: string
}

export default function ProjectMain({ projectId }: MainProps) {
  const project = projectData.find((item) => item.id === projectId)

  return (
    <>
      <div className={styles.container}>
        <Overview overview={project.overview} />
        <Impact impact={project.impact} />
        <Video currentProject={projectId} video={project.videoLink} width={project.videoWidth} height={project.videoHeight} />
        <TechnicalDetails technical={project.technicalDetails} />
        <Responsibilities responsibilities={project.responsibilities} />
      </div>
    </>
  )
}
