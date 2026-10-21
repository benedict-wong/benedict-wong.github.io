import styles from './profilepicture.module.scss'

export default function ProfilePicture() {
  return (
    <>
      <div className={styles.container}>
        <img src="/assets/image/profile.png" className={styles.image} alt="Profile Picture of Benedict Wong" />
      </div>
    </>
  )
}
