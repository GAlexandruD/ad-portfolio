import React from 'react'
import Glitch from '../components/Glitch'
import styles from './404.module.css'

type Props = {}

const Custom404 = (props: Props) => {
  return (
    <div className={styles.exterior}>
      <div className="flex h-full w-full items-center justify-center">
        <Glitch />
      </div>
    </div>
  )
}

export default Custom404
