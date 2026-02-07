import React, { useContext } from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import Menu from '../Menu/Menu'
import { TranslateContex } from '../../Contex/TranslationContex/TranslationContex'
import { ThemeContext } from '../../Contex/ThemeContext/ThemeContext'

const Header = () => {
  const { translation, changeLang } = useContext(TranslateContex);
  const { toggleTheme} = useContext(ThemeContext);
  return <header>
    <div className={styles.header}>
      <Logo />
      <h1>{translation.siteName}</h1>
      <select onChange={(e) => changeLang(e.target.value)}>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
      <select onChange={(e) => toggleTheme(e.target.value)}>
        <option value="dark">&#x263D;</option>
        <option value="light">&#x263C;</option>
      </select>
    </div>
    <Menu />
  </header>
}

export default Header