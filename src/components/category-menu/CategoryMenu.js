import React from 'react'
import CategoryItem from '../category-item/CategoryItemComponent'

const CategoryMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl}/>
      })}
    </div>
  )
}

export default CategoryMenu;