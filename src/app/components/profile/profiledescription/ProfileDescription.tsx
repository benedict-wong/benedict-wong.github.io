import ProfileLink from '../profilelinks/ProfileLink'
import styles from './profiledescription.module.scss'

export default function ProfileDescription() {
  return (
    <>
      <div className={styles.container}>
        <h1>I'm Benedict</h1>
        <p className={styles.intro}>
          I'm a detail-oriented <span className={styles.bold}>front-end web and webXR engineer </span>creating
          <span className={styles.bold}> premium, interactive experiences </span>
          for innovative brands seeking to launch immersive events and promotions.
        </p>
        <div className={styles.links}>
          <ProfileLink mode="github" />
          <ProfileLink mode="linkedin" />
          <ProfileLink mode="mail" />
        </div>
      </div>
    </>
  )
}
