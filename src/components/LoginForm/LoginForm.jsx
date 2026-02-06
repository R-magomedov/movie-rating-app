import React, { useState } from 'react';
import styles from './LoginForm.module.css';

// Пока без логики отправки — только состояние полей
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Обработчик пока просто выводит в консоль
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Вход</h2>
        
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginForm;