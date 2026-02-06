
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import MovieCard from './components/MovieCard/MovieCard'
import { top100movies } from './constants/top100movies'
import { MovieList } from './components/MovieList/MovieList'
import LoginForm from './components/LoginForm/LoginForm'
import Reviews from './components/Reviews/Reviews'

function App() {
const isLoggedIn = true 

  return (
    <>
      <Header/>
      <Routes> {/* сюда складываю все возможные маршруты */}
        <Route path="/" element={<Main />} /> {/*аналогия: if (url === '/') return <Main /> */}
        <Route path="/movies/:id" element={<MovieCard movieList={top100movies}/>} />
        <Route path="/about" element={<About />}>
          <Route path="contacts" element={<div>Контакты</div>} />
          <Route path="address" element={<div>Адрес</div>} />
        </Route>
        <Route path="/movies" element={
          isLoggedIn ? (
          <MovieList movieList={top100movies} />
            ) : (
              <Navigate to="/login" />
            )
          }/>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
