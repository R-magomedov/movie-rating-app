import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MovieList.module.css'

export const MovieList = ({ movieList }) => {
  return (
    <ul className={styles.list}>
      {movieList.map((movie) => (
        <li key={movie.rank} className={styles.item}>
          <Link 
            to={`/movies/${movie.rank}`} 
            className={styles.link}
          >
            <span className={styles.rank}>#{movie.rank}</span>
            <span className={styles.title}>{movie.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};