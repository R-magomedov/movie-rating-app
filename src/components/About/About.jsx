import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Link to="contacts">Контакты</Link>
        <br />
        <Link to="address">Адрес</Link>
        <Outlet/> {/* отображение вложенных маршрутов*/}
    </div>
   

  )
}

export default About