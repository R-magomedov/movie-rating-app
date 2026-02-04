import React from 'react'
import styles from './Main.module.css'
import Card from '../Card/Card'
import { top100movies } from '../../constants/top100movies'

const Main = () => {
  return (
  <main className={styles.main}>
    {top100movies.map((movie) => (
      <Card 
      key={movie.id}
      title={movie.title}
      description={movie.description}
      url={movie.image}
      year={movie.year}
      rating={movie.rating}
      />
    ))}
  </main>
  );
};

export default Main