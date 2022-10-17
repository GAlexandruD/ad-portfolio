import React from 'react'
import styles from './Glitch.module.css'

type Props = {
  background?: string
  color?: string
  fontFamily?: string
  fontSize?: string
  text?: string
}

const Glitch = ({}: Props) => {
  return (
    <section className={styles.outside}>
      <div className={styles.glitch}>React Developer</div>
    </section>
  )
}

export default Glitch
