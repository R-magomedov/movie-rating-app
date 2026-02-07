import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
import { TranslateContex } from '../../Contex/TranslationContex/TranslationContex'

const Menu = () => {
    const { translation } = useContext(TranslateContex);
  return (
    <nav>
        <ul className={styles.list}>
            <li>
                <NavLink to={"/"}>{translation.menu.home}</NavLink></li>
            <li>
                <NavLink to={"/about"}>{translation.menu.about}</NavLink></li>
            <li>
                <NavLink to={"/movies"}>{translation.menu.movies}</NavLink></li>
            <li>
                <NavLink to={"/reviews"}>{translation.menu.reviews}</NavLink></li>
        </ul>
    </nav>
  )
}

export default Menu