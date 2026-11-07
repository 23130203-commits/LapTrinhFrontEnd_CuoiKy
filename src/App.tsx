import { useState } from 'react'
import './App.css'
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from './pages/HomePage'

function App() {
  const [activeCategory, setActiveCategory] = useState('')
  const [keyword, setKeyword] = useState('')

  const goHome = () => {
    setActiveCategory('')
    setKeyword('')
  }

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    setKeyword('')
  }

  const search = (value: string) => {
    setKeyword(value)
    setActiveCategory('')
  }

  return (
      <MainLayout
          content={<HomePage activeCategory={activeCategory} keyword={keyword} />}
          activeCategory={activeCategory}
          goHome={goHome}
          selectCategory={selectCategory}
          search={search}
      />
  )
}

export default App
