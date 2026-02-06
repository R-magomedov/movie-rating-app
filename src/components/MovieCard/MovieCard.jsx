import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './MovieCard.module.css'

const MovieCard = ( { movieList }) => {
  let { id } = useParams();
  const movie = movieList.find(movie => movie.rank === Number(id));

  if (!movie) {
    return <div className={styles.notFound}>Фильм не найден</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{movie.title}</h1>
        
        <div className={styles.meta}>
          <span className={styles.year}>Year:{movie.year}</span>
          <span className={styles.rating}>Rating ★ {movie.rating}</span>
        </div>

        <p className={styles.description}>{movie.description}</p>
      </div>

      <Link to="/movies" className={styles.back}>
        ← Назад к списку
      </Link>
    </div>
  );
}; 

export default MovieCard