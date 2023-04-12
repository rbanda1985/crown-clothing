import React from 'react'
import './categories.styles.scss'
import CategoryMenu from './components/category-menu/CategoryMenu'
import categories from './menuItems'

const App = () => {

  return (
    <div>
      <CategoryMenu categories={categories}/>
    </div>
  )
}

export default App;
