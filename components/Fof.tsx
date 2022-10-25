import React from 'react'
import styles from './Fof.module.css'

// Fof = Four Oh Four

type Props = {
  background?: string
  color?: string
  fontFamily?: string
  fontSize?: string
  text?: string
}

const Fof = ({}: Props) => {
  return (
    <div className="flex-1">
      <section className={styles.outside}>
        <div className="flex flex-col items-center justify-center">
          <div className={styles.glitch}>404 Error</div>
          <div className={styles.pnf}>Page not found</div>
        </div>
      </section>
    </div>
  )
}

export default Fof
