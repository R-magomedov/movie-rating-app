import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav>
        <ul className={styles.list}>
            <li>
                <NavLink to={"/"}>Главная</NavLink></li>
            <li>
                <NavLink to={"/about"}>О нас</NavLink></li>
            <li>
                <NavLink to={"/movies"}>Фильмы</NavLink></li>
            <li>
                <NavLink to={"/reviews"}>Отзывы</NavLink></li>
        </ul>
    </nav>
  )
}

export default Menu