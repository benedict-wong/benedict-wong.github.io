'use client'

import styles from './profilelink.module.scss'
import { useState } from 'react'

interface ProfileLinkProps {
  mode: 'github' | 'linkedin' | 'mail'
}

export default function ProfileLink({ mode }) {
  const links = {
    github: {
      icon: '/assets/image/github.png',
      url: 'https://github.com/benedict-wong',
    },
    linkedin: {
      icon: '/assets/image/linkedin.png',
      url: 'https://www.linkedin.com/in/wongbenedict1996/',
    },
    mail: {
      icon: '/assets/image/email.png',
      url: 'mailto:wong.benedict1996@gmail.com',
    },
  }

  const link = links[mode]

  const clickLink = () => {
    window.location.href = link.url
  }

  return (
    <>
      <img src={link.icon} className={styles.icon} alt={`${mode} icon`} onClick={clickLink} />
    </>
  )
}
