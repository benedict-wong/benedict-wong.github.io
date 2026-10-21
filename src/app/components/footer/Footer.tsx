import styles from './footer.module.scss'

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <article>
          <p className={styles.copyright}>
            © Benedict Wong
            <span className={styles.currentYear}> {new Date().getFullYear()} | </span>
            Built with React/Next
          </p>
        </article>
      </section>
    </>
  )
}
