import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import Menu from '../Menu/Menu'

const Header = () => {
  return <header>
    <div className={styles.header}>
      <Logo />
      <h1>КиноРейтинг</h1>
      <img src="/vite.svg" alt="" />
    </div>
    <Menu />
  </header>
}

export default Header