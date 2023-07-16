import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className="header__item"> <Link to="/" exact >Главная</Link>  </li>
          <li className="header__item"> <Link to="/about">Обо мне</Link>  </li>
          <li className="header__item"> <Link to="/skills">Навыки</Link>  </li>
          <li className="header__item"> <Link to="/portfolio">Портфолио</Link> </li>
          <li className="header__item"> <Link to="/contacts">Связаться со мной</Link> </li>
        </ul>
      </nav>

    </header>
  )
}

