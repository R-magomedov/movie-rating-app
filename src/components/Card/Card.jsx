import React from 'react'
import styles from './Card.module.css'

const Card = ({title, description, url, year, rating}) => {
   const hitMovie = rating > 9.2;
  return (
    
    <div className={`${styles.card} ${hitMovie ? styles.hitMovie : ''}`}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className={styles.poster}>
        <img 
            className={styles.image}
            src={url}
            alt={`${title} poster`} />
    </div>
    <p>Year: {year}</p>
    <p>Rating: {rating}</p>
    <p>{hitMovie ? '⭐ Хит' : ''}</p>
    </div>
  );
};

export default Card