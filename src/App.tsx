import { useState } from 'react'
import './App.css'
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from './pages/HomePage'

function App() {
  const [activeCategory, setActiveCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [navigation, setNavigation] = useState(0)

  const goHome = () => {
    setActiveCategory('')
    setKeyword('')
    setNavigation(prev => prev + 1)
  }

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    setKeyword('')
    setNavigation(prev => prev + 1)
  }

  const search = (value: string) => {
    setKeyword(value)
    setActiveCategory('')
    setNavigation(prev => prev + 1)
  }

  return (
      <MainLayout
          content={<HomePage activeCategory={activeCategory} keyword={keyword} key={navigation}/>}
          activeCategory={activeCategory}
          goHome={goHome}
          selectCategory={selectCategory}
          search={search}
      />
  )
}

export default App
