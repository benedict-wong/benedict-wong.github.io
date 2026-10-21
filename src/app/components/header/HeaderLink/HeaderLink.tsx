import styles from './headerlink.module.scss'

interface HeaderLinkProps {
  onClick: () => void
  children?: React.ReactNode
}

export default function HeaderLink({ onClick, children }: HeaderLinkProps) {
  return (
    <>
      <a className={styles['braced-link']} onClick={onClick}>
        {children}
      </a>
    </>
  )
}
