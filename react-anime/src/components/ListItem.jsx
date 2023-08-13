import React from 'react'

const ListItem = ({title, image, onClick}) => {
  return (
    <li key={title} className='item-anime-list'>
      <div className="item-image-container">
        <img src={image} className='item-image'/>
      </div>
      <p className='item-title'>{title}</p>
      <button 
        className='watched'
        onClick={onClick}
      >WATCHED</button>
    </li>
  )
}

export default ListItem