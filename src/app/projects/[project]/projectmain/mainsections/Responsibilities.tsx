import styles from './responsibilities.module.scss'

interface ResponsibilitiesProps {
  responsibilities: string
}

export default function Responsibilities({ responsibilities }) {
  const sections = responsibilities.split(/\n\n/)

  return (
    <>
      <h2 className={styles.title}>Responsibilities</h2>
      <div>
        {sections.map((section, index) => {
          const [firstLine, ...lines] = section.split('\n')
          console.log(firstLine)

          return (
            <div key={index}>
              {firstLine.trim().endsWith(':') && <p className={styles.subtitle}>{firstLine}</p>}

              <ul>
                {lines
                  .filter((line) => line.startsWith('* '))
                  .map((line, i) => (
                    <li key={i}>{line.slice(2)}</li>
                  ))}
              </ul>

              {lines
                .filter((line) => !line.startsWith('* '))
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </div>
          )
        })}
      </div>
    </>
  )
}
