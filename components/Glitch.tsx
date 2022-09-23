import React from 'react'
import styles from './Glitch.module.css'

type Props = {
  background?: string
  color?: string
  fontFamily?: string
  fontSize?: string
  text?: string
}

const Glitch = ({
  background = '#242424',
  color = '#00ff66',
  fontFamily = 'courier, monospace',
  fontSize = '1rem',
  text = '404',
}: Props) => {
  const sectionStyle = {
    background: background,
    padding: '0',
    margin: '0',
    outline: '0',
    color: color,
    fontFamily: fontFamily,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <section className={styles.outside}>
      <div className={styles.glitch}>React Developer</div>
    </section>
  )
}

export default Glitch
