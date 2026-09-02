import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Lesson1 from './pages/learn/Lesson1'
import Lesson2 from './pages/learn/Lesson2'
import AllTypeMatchups from './pages/learn/AllTypeMatchups'
import NotFound from './pages/404/404'
import QuizHome from './pages/quiz/QuizHome'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import ExtraLesson from './pages/learn/ExtraLesson'

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  return (
    <div className='bg-zinc-900 min-h-screen text-zinc-200'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn/' element={<Navigate to="/learn/lesson-1" replace />} />
          <Route path='/learn/lesson-1' element={<Lesson1 />} />
          <Route path='/learn/type-matchups' element={<AllTypeMatchups />} />
          <Route path='/learn/lesson-2' element={<Lesson2 />} />
          <Route path='/learn/extra-lesson' element={<ExtraLesson />} />
          <Route path='/quiz' element={<QuizHome />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
