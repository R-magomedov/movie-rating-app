import React from 'react';
import styles from './Reviews.module.css';

// Статичные данные отзывов (позже можно вынести в пропсы или API)
const REVIEWS = [
  {
    id: 1,
    name: 'Анна К.',
    rating: 5,
    text: 'Отличный фильм! Спецэффекты на высоте, сюжет захватывает с первой минуты.',
    date: '2024-12-15'
  },
  {
    id: 2,
    name: 'Михаил Д.',
    rating: 4,
    text: 'Хорошо, но финал немного предсказуем. Актёрская игра — огонь!',
    date: '2024-12-10'
  },
  {
    id: 3,
    name: 'Елена С.',
    rating: 5,
    text: 'Пересматриваю второй раз. Детали, которые упустила в первый раз — просто вау.',
    date: '2024-12-08'
  }
];

function Reviews() {
  // Генерируем звёзды по рейтингу (аналог map для создания массива)
  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      
      <ul className={styles.list}>
        {REVIEWS.map((review) => (
          <li key={review.id} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.name}>{review.name}</span>
              <span className={styles.rating}>{renderStars(review.rating)}</span>
            </div>
            
            <p className={styles.text}>{review.text}</p>
            
            <span className={styles.date}>{review.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;