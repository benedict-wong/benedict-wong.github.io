import styles from './not-found.module.scss'

export default function NotFound() {
  return (
    <>
      <main>
        <p className={styles['error-message']}>We could not find a project with this id.</p>
      </main>
    </>
  )
}
