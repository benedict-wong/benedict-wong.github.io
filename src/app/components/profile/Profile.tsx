import styles from './profile.module.scss'
import ProfileDescription from './profiledescription/ProfileDescription'
import ProfilePicture from './profilepicture/ProfilePicture'

export default function Profile() {
  return (
    <>
      <div className={styles.container}>
        <ProfilePicture />
        <ProfileDescription />
      </div>
    </>
  )
}
