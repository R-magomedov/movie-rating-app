import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'

const Header = () => {
  return <header className={styles.header}>
    <Logo />
    <h1>КиноРейтинг</h1>
    <img src="/vite.svg" alt="" />
  </header>
}

export default Header