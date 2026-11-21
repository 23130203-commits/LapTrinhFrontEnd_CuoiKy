import { useState } from 'react'
import './App.css'
import MainLayout from "./layouts/MainLayout.tsx";
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SearchPage from './pages/SearchPage.tsx'
import ArticlePage from './pages/ArticlePage.tsx'
import type {Article} from "./types/news.ts";

function App() {
  const [activeCategory, setActiveCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [navigation, setNavigation] = useState(0)
  const [selectArticle, setSelectArticle] = useState<Article | null>(null)

  const goHome = () => {
    setActiveCategory('')
    setKeyword('')
    setNavigation(prev => prev + 1)
    setSelectArticle(null)
  }

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    setKeyword('')
    setNavigation(prev => prev + 1)
    setSelectArticle(null)
  }

  const search = (value: string) => {
    setKeyword(value)
    setActiveCategory('')
    setNavigation(prev => prev + 1)
    setSelectArticle(null)
  }

  const openArticle = (article: Article) => {
    setSelectArticle(article)
  }

  let pageContent
  if (selectArticle) {
    pageContent = (<ArticlePage id={selectArticle.id} onBack={() => setSelectArticle(null)} onSelect={openArticle} />)
  } else if (keyword) {
    pageContent = (<SearchPage keyword={keyword} onSelect={openArticle} />)
  } else if (activeCategory) {
    pageContent = (<CategoryPage category={activeCategory} onSelect={openArticle} />)
  } else {
    pageContent = (<HomePage key={navigation} />)
  }

  return (
      <MainLayout
          content={pageContent}
          activeCategory={activeCategory}
          goHome={goHome}
          selectCategory={selectCategory}
          search={search}
      />
  )
}

export default App
