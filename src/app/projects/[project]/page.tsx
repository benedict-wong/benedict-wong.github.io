import styles from './project.module.scss'
import { notFound } from 'next/navigation'
import projects from '@/data/portfolio-previews.json'
import projectData from '@/data/project-data.json'
import Header from '@/app/components/header/Header'
import ProjectHeader from './projectheader/ProjectHeader'
import ProjectMain from './projectmain/ProjectMain'
import Footer from '@/app/components/footer/Footer'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({
    project: project.id,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project: projectId } = await params

  const project = projectData.find((item) => item.id === projectId)

  console.log(params)

  if (!project) {
    notFound()
  }

  console.log(project)

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProjectHeader projectId={projectId} />
        <ProjectMain projectId={projectId} />
      </div>
      <Footer />
    </>
  )
}
