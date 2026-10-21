import styles from './video.module.scss'

interface VideoProps {
  currentProject: string
  video: string
  width: string
  height: string
}

export default function Video({ currentProject, video, width, height }: VideoProps) {
  console.log(currentProject)
  return (
    <>
      <article className={styles.container}>
        {video ? (
          <iframe allowFullScreen className={styles['iframe-video']} width={width} height={height} src={video}></iframe>
        ) : (
          <video controls className={styles.video} src={`/assets/video/${currentProject}.mp4`} />
        )}
      </article>
    </>
  )
}
